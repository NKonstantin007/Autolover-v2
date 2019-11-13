import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({isAuth, path, component: Component}) => {
    if(!isAuth) {
        return <Redirect to="/signin" />
    }

    return <Route path={path} render={(props) => <Component {...props} />} />
}

const mapStateToProps = ({currentUser}) => {
    return {
        isAuth: currentUser.isAuth
    };
};

export default connect(mapStateToProps)(PrivateRoute);