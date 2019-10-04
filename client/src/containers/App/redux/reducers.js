import {reducer as reduxFormReducer} from 'redux-form';
import SignUpReducer from '../../SignUpContainer/redux/reducer';

export default {
    form: reduxFormReducer,
    signUp: SignUpReducer
};
