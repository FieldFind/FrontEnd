import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../views/LogInScreen';
import MainScreen from '../views/MainScreen';
import ProfileScreen from '../views/ProfileScreen';
import ReservationsScreen from '../views/ReservationsScreen';


const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Main: {screen: MainScreen},
  Reservations: {screen: ReservationsScreen},
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;