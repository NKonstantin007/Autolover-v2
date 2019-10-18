import {reducer as reduxFormReducer} from 'redux-form';
import SignUpReducer from '../../SignUpContainer/redux/reducer';
import SignInReducer from '../../SignInContainer/redux/reducer';

export default {
    form: reduxFormReducer,
    signUp: SignUpReducer,
    signIn: SignInReducer
};
