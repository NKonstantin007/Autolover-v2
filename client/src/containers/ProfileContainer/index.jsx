import React from 'react';
 
import {ProfileWrapper} from './components/styles';
import ProfileForm from  './components/ProfileForm';

const ProfileContainer = () => {
    return (
        <ProfileWrapper>
            <ProfileForm initialValues={{name: "testuser", email: 'user@test.ru'}} />
        </ProfileWrapper>
    );
}

export default ProfileContainer;