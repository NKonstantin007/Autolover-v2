import React from 'react';
import {Route, Switch} from 'react-router-dom';

//import routes component
import HomeContainer from '../../HomeContainer';
import SignUpContainer from '../../SignUpContainer';
import SignInContainer from '../../SignInContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/signup" component={SignUpContainer} />
            <Route path="/signin" component={SignInContainer} />
        </Switch>
    );
}

export default Routes;