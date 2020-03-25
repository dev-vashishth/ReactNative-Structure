 //LIBRARIES
 import { createStackNavigator } from 'react-navigation'
 //ASSETS
 import Login from './Screens/Login'


 //=========STACK DECLARATION FOR AUTH SCREENS===========//

 const AuthNavigator = createStackNavigator({
    Login : { screen : Login  },

 },
{   initialRouteName:'Login'
    
});

 export default AuthNavigator;