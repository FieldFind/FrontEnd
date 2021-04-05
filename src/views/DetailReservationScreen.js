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

    twelveHoursTimeString = (timeString)=>{
        var h = timeString % 12 || 12;
        var ampm = (h < 12 || h === 24) ? "AM" : "PM";
        return h +" "+ampm;
    }

    timeLimits = (limit,hourRange)=>{
        let indexLoc = hourRange.indexOf('-');
        let leftLim = hourRange.substring(0,indexLoc);
        let rightLim = hourRange.substring(indexLoc+1);
        switch(limit){
            case 0: return leftLim;
            case 1: return rightLim;
        }
    }

    timeIndicator = ()=>{
        let timeObject = {
            colorIndicator:'',
            leftHourLim:'',
            rightHourLim:''
        }
        let hourRange;
        let currentHours = this.state.time.getHours();
        switch(this.state.time.getDay()){
            case(0):
                hourRange = String(this.state.data.Domingo);
                currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? timeObject.colorIndicator = 'gray': timeObject.colorIndicator = 'green';
            case(1):
                hourRange = String(this.state.data.Lunes);
                currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? timeObject.colorIndicator = 'gray': timeObject.colorIndicator = 'green';
            case(2):
                hourRange = String(this.state.data.Martes);
                currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? timeObject.colorIndicator = 'gray': timeObject.colorIndicator = 'green';
            case(3):
                hourRange = String(this.state.data.Miercoles);
                currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? timeObject.colorIndicator = 'gray': timeObject.colorIndicator = 'green';
            case(4):
                hourRange = String(this.state.data.Jueves);
                currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? timeObject.colorIndicator = 'gray': timeObject.colorIndicator = 'green';
            case(5):
                hourRange = String(this.state.data.Viernes);
                currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? timeObject.colorIndicator = 'gray': timeObject.colorIndicator = 'green';
            case(6):
                hourRange = String(this.state.data.Sabado);
                currentHours < parseInt(this.timeLimits(0,hourRange),10) || currentHours > parseInt(this.timeLimits(1,hourRange),10)
                ? timeObject.colorIndicator = 'gray': timeObject.colorIndicator = 'green';
        }
        timeObject.leftHourLim = this.timeLimits(0,hourRange);
        timeObject.rightHourLim = this.timeLimits(1,hourRange);
        return timeObject;
    }

    render(){
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
                <View style={{flex:2}}>                    
                    <Text style={{fontSize:20}}>{this.props.navigation.getParam("item").espacio.nombre_espacio}</Text>
                    <Text>{this.props.navigation.getParam("item").espacio.tipo_espacio}</Text>                    
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:this.timeIndicator().colorIndicator}}>Open ∙</Text>
                        <Text style={{marginLeft:5}}>Closes {this.twelveHoursTimeString(this.timeIndicator().rightHourLim)}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>                    
                        <Text>Latitud: {this.props.navigation.getParam("item").espacio.latitud}, </Text>
                        <Text>Longitud: {this.props.navigation.getParam("item").espacio.longitud}</Text>
                    </View>
                    <Text style={{textDecorationLine:'underline'}}>Ver en el mapa</Text>
                    <View style={{borderWidth:1,marginVertical:'20%',marginHorizontal:'5%',justifyContent:'space-between'}}>
                        <Text style={{alignSelf:'center'}}>Detalles</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View>
                                    <Text>Contacto:</Text>
                                </View>
                                <View>
                                    <Text>Total a pagar:</Text>
                                </View>
                                <View>
                                    <Text>(Hoy)</Text>
                                </View>
                        </View>
                        <Text style={{color:'red',alignSelf:'center'}}>Cancelar reserva</Text>
                    </View>
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