import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/views/LogInScreen';
import ProfileScreen from './src/views/ProfileScreen';


const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;

