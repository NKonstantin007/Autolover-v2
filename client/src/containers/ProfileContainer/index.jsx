import React, {useState} from 'react';
import {connect} from 'react-redux';

import {ProfileWrapper} from './style';
import ProfileForm from  './containers/ProfileForm';
import Spinner from '../../components/Spinner';
import ChangePasswordModal from './modals/ChangePasswordModal';
import {
    updateCurrentUserInfo, updateAvatarCurrentUser, updatePasswordCurrentUser
} from '../App/redux/acitons';

function ProfileContainer(props) {
    const {user, isFetching} = props;
    
    const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false);

    const togglePasswordModalHandler = () => {
        setIsOpenPasswordModal((prevState) => !prevState);
    }

    const updateCurrentUserInfoHandler = async (updatedUser) => {
        const {name, aboutMe} = updatedUser;
        const info = {name, aboutMe}
        await props.updateCurrentUserInfo(info);
    }

    const updateAvatarCurrentUserHandler = async (avatar) => {
        await props.updateAvatarCurrentUser(avatar);
    }

    const updatePasswordCurrentUserHandler = async (passObj) => {
        togglePasswordModalHandler();
        await props.updatePasswordCurrentUser(passObj);
    }

    if(isFetching) { 
        return <Spinner />;
    }
    return (
        <ProfileWrapper>
            <ProfileForm 
                initialValues={user} 
                onSubmit={updateCurrentUserInfoHandler}
                onUpdateAvatarCurrentUser={updateAvatarCurrentUserHandler}
                onUpdatePasswordCurrentUser={togglePasswordModalHandler}
            />
            <ChangePasswordModal 
                isOpen={isOpenPasswordModal}
                onToggle={togglePasswordModalHandler}
                onSubmit={updatePasswordCurrentUserHandler}
            />    

        </ProfileWrapper>
    );
}

const mapStateToProps = (state) => {
    const { currentUser: {user, isFetching} } = state;
    return {
        user,
        isFetching,
    };
};

const mapDispatchToProps = {
    updateCurrentUserInfo,
    updateAvatarCurrentUser,
    updatePasswordCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);