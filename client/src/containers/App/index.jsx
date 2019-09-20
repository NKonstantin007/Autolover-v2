import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './redux/store';
import Routes from './components/Routes';
import AutoHeader from '../../components/AutoHeader';
import Slider from '../../components/Slider';
import AutoFooter from '../../components/AutoFooter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GlobalStyles';

const AppContainer = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <AutoHeader />
                    <Slider />
                    <Routes />
                    <AutoFooter />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default AppContainer;