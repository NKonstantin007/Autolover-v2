import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Alert from 'react-s-alert';

import store from './redux/store';
import Routes from './components/Routes';
import AutoHeader from '../../components/AutoHeader';
import AutoFooter from '../../components/AutoFooter';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import './styles/GlobalStyles';

const AppContainer = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <AutoHeader />
                    <Routes />
                    <AutoFooter />
                    <Alert 
                        stack={{limit: 5}}
                        effect="bouncyflip"
                        position="top-right"
                        timeout={10000}
                        offset={80}
                    />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default AppContainer;