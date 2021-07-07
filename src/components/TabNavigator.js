const TabNavigator = () => {createBottomTabNavigator({
    Mapa: MainScreen,
    Reservaciones: ReservationsScreen,
    Perfil: ProfileScreen,
    Soporte: SupportScreen},
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused}) => {
          const { routeName } = navigation.state;
          let iconSource;
          let tintColor;
          if(routeName == 'Mapa'){
            iconSource = require('../../assets/mapa.png');
            tintColor = focused ? 'blue' : 'gray';
          }else if(routeName == 'Reservaciones'){
            iconSource = require('../../assets/Calendario.png');
            tintColor = focused ? 'blue' : 'gray';
          }
          else if(routeName == 'Perfil'){
            iconSource = require('../../assets/User.png');
            tintColor = focused ? 'blue' : 'gray';
          }
          else if(routeName == 'Soporte'){
            iconSource = require('../../assets/Help.png');
            tintColor = focused ? 'blue' : 'gray';
          }
          return <Image source={iconSource} style={{height:30, width:30}} tintColor={tintColor}/>
        }
      }),
      tabBarOptions: {
        activeTintColor: 'blue',
        style: {height:60}
      }
    }
}
);

export default TabNavigator