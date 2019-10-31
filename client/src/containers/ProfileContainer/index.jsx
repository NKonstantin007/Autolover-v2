import React from 'react';
import {connect} from 'react-redux';
 
import {ProfileWrapper} from './components/styles';
import ProfileForm from  './components/ProfileForm';
import Spinner from '../../components/Spinner';
import {updateCurrentUser} from '../App/redux/acitons';

const ProfileContainer = ({user, isFetching, updateCurrentUser}) => {

    const onUpdateCurrentUser = async (updatedUser) => {
        try {
            await updateCurrentUser(updatedUser);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <ProfileWrapper>
            { isFetching && <Spinner /> }
            { !isFetching && <ProfileForm initialValues={user} onSubmit={onUpdateCurrentUser} /> }
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
    updateCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);