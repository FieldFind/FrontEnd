import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import MapView from "../components/Map";
import SearchBar from '../components/SearchBar'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReservationsScreen from '../views/ReservationsScreen';
//import FooterNav from '../components/FooterNav'

const mapIcon = require('../../assets/mapa.png');
//const calendarIcon = require('../../assets/Calendario.png');
const userIcon = require('../../assets/User.png');
const settingIcon = require('../../assets/setting.png')
const filterIcon = require('../../assets/filter.png')


class MainScreen extends Component {
  /*
  static defaultNavigationOptions = {
    tabBarIcon:({focused}) => {
      const iconimg = focused ? require('../../assets/mapa.png') : require('../../assets/mapa.png');
      return (
        <Image 
            source={iconimg}
            style={{width:10, height:10}}
        />);
    }
  };*/

  render() {
    return (
      <View style={styles.container}>
        <Text>Field Find</Text>
        <View style={styles.bar} >
          <View style={styles.searchBox} >
            <View style={styles.searchBar}>
        <SearchBar/>
        </View>
        <Text style={{top:'100%'}}> Field Find </Text>
        <Image source={filterIcon} 
        style={styles.filterIcon}/>
        </View>
        </View>
        <MapView/>
        
      </View>
    );/**<FooterNav style={styles.FooterNav}/> */
  }
}

const TabNavigator = createBottomTabNavigator({
    Main: MainScreen,
    Reservations: ReservationsScreen},
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused}) => {
          const { routeName } = navigation.state;
          let iconName;
          let tintColor;
          if(routeName == 'Main'){
            iconName = focused ? require('../../assets/mapa.png') : require('../../assets/mapa.png');
            tintColor = focused ? 'blue' : 'gray';
          }else if(routeName == 'Reservations'){
            iconName = focused ? require('../../assets/Calendario.png') : require('../../assets/Calendario.png');
            tintColor = focused ? 'blue' : 'gray';
          }
          return <Image source={iconName} style={{height:30, width:30}} tintColor={tintColor}/>
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  FooterNav: {
    position: 'absolute'
  },
  bar: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "13%",
    top: '0%',
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  searchBar: {
    position: "absolute",
    left: '10%',
    width: '80%',
  },
  searchBox: {
    position: "absolute",
    top: '60%',
    width: '95%',
    left: '3%'
  },
  filterIcon: {
    position: 'absolute',
    right:'0%',
    width: 34,
    height: 34
  }
});

export default createAppContainer(TabNavigator);