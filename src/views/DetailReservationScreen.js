import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

class DetailReservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      time: new Date(),
      isMapOpen: false,
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch(
        `https://fieldfind-backend.herokuapp.com/horarios/${
          this.props.navigation.getParam("item").espacio.horario
        }`
      );
      let json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.error(error);
    }
  }

  twelveHoursTimeString = (timeString) => {
    var h = timeString % 12 || 12;
    var ampm = h < 12 || h === 24 ? "AM" : "PM";
    return h + " " + ampm;
  };

  timeLimits = (limit, hourRange) => {
    let indexLoc = hourRange.indexOf("-");
    let leftLim = hourRange.substring(0, indexLoc);
    let rightLim = hourRange.substring(indexLoc + 1);
    switch (limit) {
      case 0:
        return leftLim;
      case 1:
        return rightLim;
    }
  };

  timeIndicator = () => {
    let timeObject = {
      colorIndicator: "",
      leftHourLim: "",
      rightHourLim: "",
    };
    let hourRange;
    let currentHours = this.state.time.getHours();
    switch (this.state.time.getDay()) {
      case 0:
        hourRange = String(this.state.data.Domingo);
        currentHours < parseInt(this.timeLimits(0, hourRange), 10) ||
        currentHours > parseInt(this.timeLimits(1, hourRange), 10)
          ? (timeObject.colorIndicator = "gray")
          : (timeObject.colorIndicator = "green");
      case 1:
        hourRange = String(this.state.data.Lunes);
        currentHours < parseInt(this.timeLimits(0, hourRange), 10) ||
        currentHours > parseInt(this.timeLimits(1, hourRange), 10)
          ? (timeObject.colorIndicator = "gray")
          : (timeObject.colorIndicator = "green");
      case 2:
        hourRange = String(this.state.data.Martes);
        currentHours < parseInt(this.timeLimits(0, hourRange), 10) ||
        currentHours > parseInt(this.timeLimits(1, hourRange), 10)
          ? (timeObject.colorIndicator = "gray")
          : (timeObject.colorIndicator = "green");
      case 3:
        hourRange = String(this.state.data.Miercoles);
        currentHours < parseInt(this.timeLimits(0, hourRange), 10) ||
        currentHours > parseInt(this.timeLimits(1, hourRange), 10)
          ? (timeObject.colorIndicator = "gray")
          : (timeObject.colorIndicator = "green");
      case 4:
        hourRange = String(this.state.data.Jueves);
        currentHours < parseInt(this.timeLimits(0, hourRange), 10) ||
        currentHours > parseInt(this.timeLimits(1, hourRange), 10)
          ? (timeObject.colorIndicator = "gray")
          : (timeObject.colorIndicator = "green");
      case 5:
        hourRange = String(this.state.data.Viernes);
        currentHours < parseInt(this.timeLimits(0, hourRange), 10) ||
        currentHours > parseInt(this.timeLimits(1, hourRange), 10)
          ? (timeObject.colorIndicator = "gray")
          : (timeObject.colorIndicator = "green");
      case 6:
        hourRange = String(this.state.data.Sabado);
        currentHours < parseInt(this.timeLimits(0, hourRange), 10) ||
        currentHours > parseInt(this.timeLimits(1, hourRange), 10)
          ? (timeObject.colorIndicator = "gray")
          : (timeObject.colorIndicator = "green");
    }
    timeObject.leftHourLim = this.timeLimits(0, hourRange);
    timeObject.rightHourLim = this.timeLimits(1, hourRange);
    return timeObject;
  };

  cancelReservation = async () => {
    try{
      Alert.alert(
        "Advertencia",
        "¿Está seguro que desea cancelar la reservación?",
        [{
          text: "Continuar",
          onPress: () => {
            fetch(`https://fieldfind-backend.herokuapp.com/reservas/${this.props.navigation.getParam("item").id}`,{
              method:'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({estado: false})
            })
          }
        },
        {
          text: "Cancelar"
        }]
      );
    } catch(error){
      console.error(error)
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            height: "10%",
            backgroundColor: "#384650",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Reservaciones");
            }}
            style={{ width: "20%" }}
          >
            <Image
              source={require("../../assets/sharp_arrow_back_black_48dp.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={{
              uri: this.props.navigation.getParam("item").espacio.url_imagen,
            }}
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.infoArea}>
          <Text style={{ fontSize: 25 }}>
            {this.props.navigation.getParam("item").espacio.nombre_espacio}
          </Text>
          <Text style={{ color: "gray" }}>
            {this.props.navigation.getParam("item").espacio.tipo_espacio}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: this.timeIndicator().colorIndicator }}>
              Abierto ∙
            </Text>
            <Text
              style={{
                marginLeft: 5,
                color: "gray",
              }}
            >
              Cierra{" "}
              {this.twelveHoursTimeString(this.timeIndicator().rightHourLim)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ isMapOpen: true });
              console.log(this.props.navigation.getParam("item").espacio);
            }}
            style={{ width: "50%" }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 15,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Ver en el mapa
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#808B96",
              height: "45%",
              padding: 5,
              marginVertical: "20%",
              marginHorizontal: "5%",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 25,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Detalles
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Propietario
                </Text>
                <Text style={{ textAlign: "center" }}>
                  {this.props.navigation.getParam("item").espacio.cuenta}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Tarifa
                </Text>
                <Text style={{ textAlign: "center" }}>
                  RD${this.props.navigation.getParam("item").espacio.tarifa}.00
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Hoy
                </Text>
                <Text style={{ textAlign: "center" }}>
                  {this.twelveHoursTimeString(this.timeIndicator().leftHourLim)}{" "}
                  -{" "}
                  {this.twelveHoursTimeString(
                    this.timeIndicator().rightHourLim
                  )}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              disabled={!this.props.navigation.getParam("item").estado}
              onPress={this.cancelReservation}
              style={{width:'50%', alignSelf:'center'}}>
                <Text
                  style={{
                  color: this.props.navigation.getParam("item").estado ? "red": "gray",
                  alignSelf:'center'}}>
                    Cancelar
                </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isMapOpen ? (
          <View style= {{position: 'absolute', height: '100%', width: '100%'}}>
            <TouchableOpacity
                style={{
                  position: 'absolute',
                  backgroundColor: "white",
                  height: 50,
                  width: '100%',
                  top: '5%'
                }}
                onPress={() => {
                  this.setState({isMapOpen: false})
                }}
              >
                <Image
                  source={require("../../assets/sharp_arrow_back_black_48dp.png")}
                />
              </TouchableOpacity>
          <MapView style= {{position: 'absolute', height: '100%', width: '100%', top: '11%'}}
          
          >
              <Marker key={this.props.navigation.getParam("item").espacio.id}
               coordinate={{
                longitude: this.props.navigation.getParam("item").espacio.longitud,
                latitude: this.props.navigation.getParam("item").espacio.latitud,
              }}/> 
          </MapView>
          
          </View>
        ) : null}
        <View></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoArea: {
    flex: 2,
    paddingVertical: "5%",
    paddingHorizontal: "3%",
  },
});

export default DetailReservation;
