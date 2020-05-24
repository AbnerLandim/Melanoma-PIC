import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import SignUp1 from './pages/SignUp1';
import SignUp2 from './pages/SignUp2';
import Quest1 from './pages/Quest1';

const Routes = createAppContainer(
    createStackNavigator({
        Quest1,
        SignUp2,
        SignUp1,
        Login,
        ForgotPass,
        Main,
    })
);

export default Routes;