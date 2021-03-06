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
          <View style={{height:'15%',flexDirection:'row',backgroundColor:'#384650',justifyContent:'space-between',alignItems:'center'}}>
              <View style={{width:'85%', marginLeft: '7.7%', marginTop: '10%'}}>
                <SearchBar/>
              </View>              
              {/* <Image 
                source={require('../../assets/filter.png')}
                style={{width:30, height:30}}/> */}
          </View>
          <MapView/>       
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
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
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default createAppContainer(TabNavigator);