import React from 'react';
import {connect} from 'react-redux';
 
import {ProfileWrapper} from './components/styles';
import ProfileForm from  './components/ProfileForm';

const ProfileContainer = (props) => {
    return (
        <ProfileWrapper>
            <ProfileForm initialValues={props.user} />
        </ProfileWrapper>
    );
}

const mapStateToProps = ({currentUser}) => {
    const user = currentUser.user;
    return {
        user
    }
}

export default connect(mapStateToProps)(ProfileContainer);