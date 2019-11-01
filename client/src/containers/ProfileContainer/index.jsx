import React from 'react';
import {connect} from 'react-redux';
 
import {ProfileWrapper} from './components/styles';
import ProfileForm from  './components/ProfileForm';
import Spinner from '../../components/Spinner';
import {updateCurrentUser, updateAvatarCurrentUser} from '../App/redux/acitons';

const ProfileContainer = (props) => {

    const {
        user, isFetching, updateCurrentUser, updateAvatarCurrentUser
    } = props;

    const updateCurrentUserHandler = async (updatedUser) => {
        await updateCurrentUser(updatedUser);
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
                    onSubmit={updateCurrentUserHandler}
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
    updateCurrentUser,
    updateAvatarCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);