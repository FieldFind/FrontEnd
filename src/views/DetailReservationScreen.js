import React, {Component} from 'react';
import {  
  SafeAreaView, 
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

class DetailReservation extends Component{

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={{height:'10%',backgroundColor:'#384650',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Reservations")}}>
                        <Image source={require('../../assets/sharp_arrow_back_black_48dp.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Image
                        source={{uri: this.props.navigation.getParam("item").espacio.url_imagen}}
                        style={{flex:1}} />
                </View>
                <View style={{flex:2,backgroundColor:'#A8FAED'}}>
                    <Text>{this.props.navigation.getParam("item").espacio.nombre_espacio}</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});

export default DetailReservation;