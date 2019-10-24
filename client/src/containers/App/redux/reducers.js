import {reducer as reduxFormReducer} from 'redux-form';
import SignUpReducer from '../../SignUpContainer/redux/reducer';
import SignInReducer from '../../SignInContainer/redux/reducer';
import currentUserReducer from './currentUserReducer';

export default {
    form: reduxFormReducer,
    signUp: SignUpReducer,
    signIn: SignInReducer,
    currentUser: currentUserReducer
};
