import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../views/LogInScreen';
import MainScreen from '../views/MainScreen';
import ProfileScreen from '../views/ProfileScreen';


const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Main: {screen: MainScreen},
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;