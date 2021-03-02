import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from "react-native";



const mapIcon = require('../../assets/mapa.png');
const calendarIcon = require('../../assets/Calendario.png');
const userIcon = require('../../assets/User.png');
const settingIcon = require('../../assets/setting.png')


export default class FooterNav extends Component {
    render() {
        return (

            <View style={styles.foot} >
                <View>
                    {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main')}}> */}
                    <Image style={styles.mapIcon}
                        source={mapIcon}
                    />
                    {/* </TouchableOpacity> */}
                    <Image source={calendarIcon}
                        style={styles.calendarIcon} />
                    <Image source={userIcon}
                        style={styles.userIcon} />
                        
                    <Image source={settingIcon}
                        style={styles.settingIcon} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    foot: {
        zIndex: 1,
        position: "absolute",
        width: "100%",
        height: "13%",
        bottom: 0,
        backgroundColor: "white",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    mapIcon: {
        position: "absolute",
        width: 45,
        height: 39,
        left: 29,
        top: 35,
        shadowColor: "#000",
    },

    calendarIcon: {
        position: "absolute",
        width: 45,
        height: 39,
        left: 129,
        top: 35,
        shadowColor: "#000",
    },
    userIcon: {
        position: "absolute",
        width: 45,
        height: 39,
        left: 220,
        top: 35,
        shadowColor: "#000",
    },
    settingIcon: {
        position: "absolute",
        width: 45,
        height: 39,
        left: 305,
        top: 35,
        shadowColor: "#000",
    },
});
