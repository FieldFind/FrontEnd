import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../views/LogInScreen';
import MainScreen from '../views/MainScreen';
import ProfileScreen from '../views/ProfileScreen';
//import ReservationsScreen from '../views/ReservationsScreen';
import DetailReservation from '../views/DetailReservationScreen';

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Main: {screen: MainScreen},
  //Reservations: {screen: ReservationsScreen},
  DetailReservation: {screen: DetailReservation}
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;