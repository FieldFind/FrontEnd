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
    constructor(props) {
        super(props);
    
        this.state = {
          data: {},
          time: new Date()
        };
    }

    async componentDidMount() {
        try {
          let response = await fetch(`https://fieldfind-backend.herokuapp.com/horarios/${this.props.navigation.getParam("item").espacio.horario}`);
          let json = await response.json();
          this.setState({ data: json });
          
        } catch (error) {
          console.error(error);
        }
    }

    timeLimits = (limit,hourRange)=>{
        let indexLoc = hourRange.indexOf('-');
        let leftLim = hourRange.substring(0,indexLoc);
        let rightLim = hourRange.substring(indexLoc+1);;
        switch(limit){
            case 0: return leftLim;
            case 1: return rightLim;
        }
    }

    colorIndicator = ()=>{
        let hourRange;
        let currentHours = this.state.time.getHours();
        switch(this.state.time.getDay()){
            case(0):
                hourRange = String(this.state.data.Domingo);
                return currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? 'gray': 'green';
            case(1):
                hourRange = String(this.state.data.Lunes);
                return currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? 'gray': 'green';
            case(2):
                hourRange = String(this.state.data.Martes);
                return currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? 'gray': 'green';
            case(3):
                hourRange = String(this.state.data.Miercoles);
                return currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? 'gray': 'green';
            case(4):
                hourRange = String(this.state.data.Jueves);
                return currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? 'gray': 'green';
            case(5):
                hourRange = String(this.state.data.Viernes);
                return currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? 'gray': 'green';
            case(6):
                hourRange = String(this.state.data.Sabado);
                return currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? 'gray': 'green';
        }
    }

    render(){
        const {data, time} = this.state;
        return(
            <SafeAreaView style={styles.container}>
                <View style={{height:'10%',backgroundColor:'#384650',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Reservations")}} style={{width:'20%'}}>
                        <Image source={require('../../assets/sharp_arrow_back_black_48dp.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Image
                        source={{uri: this.props.navigation.getParam("item").espacio.url_imagen}}
                        style={{flex:1}} />
                </View>
                <View style={{flex:2,backgroundColor:'#A8FAED'}}>
                    <Text style={{fontSize:20}}>{this.props.navigation.getParam("item").espacio.nombre_espacio}</Text>
                    <Text style={{fontSize:20,color:this.colorIndicator()}}>Open</Text>
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