import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './redux/store';
import Routes from './components/Routes';

const AppContainer = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default AppContainer;