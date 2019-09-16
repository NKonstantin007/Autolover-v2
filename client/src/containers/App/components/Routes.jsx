import React from 'react';
import {Route, Switch} from 'react-router-dom';

//import routes component
import HomeContainer from '../../HomeContainer';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={HomeContainer} />
        </Switch>
    );
}

export default Routes;