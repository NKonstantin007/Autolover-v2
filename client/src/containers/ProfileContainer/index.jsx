import React from 'react';
import {connect} from 'react-redux';
 
import {ProfileWrapper} from './components/styles';
import ProfileForm from  './components/ProfileForm';
import Spinner from '../../components/Spinner';
import {updateCurrentUserInfo, updateAvatarCurrentUser} from '../App/redux/acitons';

const ProfileContainer = (props) => {

    const {
        user, isFetching, updateCurrentUserInfo, updateAvatarCurrentUser
    } = props;

    const updateCurrentUserInfoHandler = async (updatedUser) => {
        const {name, aboutMe} = updatedUser;
        const info = {name, aboutMe}
        await updateCurrentUserInfo(info);
    }

    const updateAvatarCurrentUserHandler = async (avatar) => {
        await updateAvatarCurrentUser(avatar);
    }

    return (
        <ProfileWrapper>
            { isFetching && <Spinner /> }
            { 
                !isFetching && 
                <ProfileForm 
                    initialValues={user} 
                    onSubmit={updateCurrentUserInfoHandler}
                    onUpdateAvatarCurrentUser={updateAvatarCurrentUserHandler}
                /> 
            }
        </ProfileWrapper>
    );
}

const mapStateToProps = ({currentUser}) => {
    const { user, isFetching } = currentUser;
    return {
        user,
        isFetching
    };
};

const mapDispatchToProps = {
    updateCurrentUserInfo,
    updateAvatarCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);