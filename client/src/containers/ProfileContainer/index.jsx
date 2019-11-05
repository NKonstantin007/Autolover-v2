import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form'; 

import {ProfileWrapper} from './components/styles';
import ProfileForm from  './components/ProfileForm';
import Spinner from '../../components/Spinner';
import ChangePasswordModal from './modals/ChangePasswordModal';
import {
    updateCurrentUserInfo, updateAvatarCurrentUser, updatePasswordCurrentUser
} from '../App/redux/acitons';

class ProfileContainer extends Component{
    state = {
        isOpenPasswordModal: false
    };

    togglePasswordModalHandler = () => {
        this.setState({
            isOpenPasswordModal: !this.state.isOpenPasswordModal
        });
    }

    updateCurrentUserInfoHandler = async (updatedUser) => {
        const {name, aboutMe} = updatedUser;
        const info = {name, aboutMe}
        await this.props.updateCurrentUserInfo(info);
    }

    updateAvatarCurrentUserHandler = async (avatar) => {
        await this.props.updateAvatarCurrentUser(avatar);
    }

    updatePasswordCurrentUserHandler = async () => {
        const passwordObj = this.props.valuesFromChangePasswordForm;
        await this.props.updatePasswordCurrentUser(passwordObj);
        this.togglePasswordModalHandler();
    }

    render() {
        const {
            user, isFetching
        } = this.props;
    
        if(isFetching) { 
            return <Spinner />;
        }
        return (
            <ProfileWrapper>
                <ProfileForm 
                    initialValues={user} 
                    onSubmit={this.updateCurrentUserInfoHandler}
                    onUpdateAvatarCurrentUser={this.updateAvatarCurrentUserHandler}
                    onUpdatePasswordCurrentUser={this.togglePasswordModalHandler}
                />
                <ChangePasswordModal 
                    isOpen={this.state.isOpenPasswordModal}
                    onToggle={this.togglePasswordModalHandler}
                    onSubmit={this.updatePasswordCurrentUserHandler}
                />    

            </ProfileWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    const { currentUser: {user, isFetching} } = state;
    return {
        user,
        isFetching,
        valuesFromChangePasswordForm: getFormValues('ChangePasswordForm')(state)
    };
};

const mapDispatchToProps = {
    updateCurrentUserInfo,
    updateAvatarCurrentUser,
    updatePasswordCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);