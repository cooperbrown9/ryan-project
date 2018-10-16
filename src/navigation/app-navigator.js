import { createDrawerNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';


const AppNavigator = createDrawerNavigator({
  // this is what the routes are called
  // the route "login", will open LoginScreen
  // the route "home", will open HomeScreen, you decide the route name
  login: LoginScreen,
  home: HomeScreen
});

export default AppNavigator;
