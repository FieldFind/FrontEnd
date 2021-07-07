import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../views/LogInScreen';
import MainScreen from '../views/MainScreen';
import DetailReservation from '../views/DetailReservationScreen';

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Main: {screen: MainScreen},
  DetailReservation: {screen: DetailReservation}
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;