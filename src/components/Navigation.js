import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../views/LogInScreen';
import ProfileScreen from '../views/ProfileScreen';


const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;