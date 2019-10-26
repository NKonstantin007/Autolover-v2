import React from 'react';
import {Route, Switch} from 'react-router-dom';

//import routes component
import HomeContainer from '../../HomeContainer';
import SignUpContainer from '../../SignUpContainer';
import SignInContainer from '../../SignInContainer';
import ProfileContainer from '../../ProfileContainer';
 
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/signup" component={SignUpContainer} />
            <Route path="/signin" component={SignInContainer} />
            <Route path="/profile" component={ProfileContainer} />
        </Switch>
    );
}

export default Routes;