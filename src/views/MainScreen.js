import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MapView from "../components/Map";
import SearchBar from '../components/SearchBar'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReservationsScreen from '../views/ReservationsScreen';
import ProfileScreen from '../views/ProfileScreen';
import SupportScreen from '../views/SupportScreen';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{height:'15%',flexDirection:'row',backgroundColor:'#384650',justifyContent:'space-between',alignItems:'center',padding:'5%'}}>
              <View style={{width:'85%'}}>
                <SearchBar/>
              </View>              
              <Image 
                source={require('../../assets/filter.png')}
                style={{width:30, height:30}}/>
          </View>
          <MapView/>       
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
<<<<<<< HEAD
    Mapa: MainScreen,
    Reservaciones: ReservationsScreen,
    Perfil: ProfileScreen,
    Soporte: SupportScreen},
=======
    Main: MainScreen,
    Reservations: ReservationsScreen,
    Profile: ProfileScreen,
    Support: SupportScreen},
>>>>>>> d2e6611781d8a2e2ff33a55082aa8ba2ec802381
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
<<<<<<< HEAD
          else if(routeName == 'Soporte'){
=======
          else if(routeName == 'Support'){
>>>>>>> d2e6611781d8a2e2ff33a55082aa8ba2ec802381
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
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default createAppContainer(TabNavigator);