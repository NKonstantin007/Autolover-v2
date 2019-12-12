import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Routes from '../components/Routes';
import Footer from '../components/Footer';
import Spinner from '../../../components/Spinner';
import {fetchCurrentUser, signOutCurrentUser} from '../redux/acitons';

function Main(props) {
    const {isFetching, isAuth, user, fetchCurrentUser, signOutCurrentUser, history} = props;

    useEffect(() => {
        fetchCurrentUser(history);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    return (
        <>
            <Header isAuth={isAuth} user={user} handleSignOut={signOutCurrentUser} />
            { isFetching ? <Spinner /> : <Routes /> }
            <Footer />
        </>
    ); 
}

Main.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired,
    user: PropTypes.object,
    fetchCurrentUser: PropTypes.func.isRequired,
    signOutCurrentUser: PropTypes.func.isRequired
}

const mapStateToProps = ({currentUser}) => {
    const {isFetching, isAuth, user} = currentUser;
    return {
        isFetching, 
        isAuth,
        user
    };
}

const mapDispatchToProps = {
    fetchCurrentUser, 
    signOutCurrentUser
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Main);