import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, TouchableOpacity } from "react-native-elements";
import TimePicker from "./TimePicker";

const apiCall = async () =>{
  let data = await fetch('https://fieldfind-backend.herokuapp.com/users');
  let json = await data.json();
  console.log(json[0])
  return json
}

const apiAxios = async () => {
  axios.post('https://fieldfind-backend.herokuapp.com/reservas', {
    hora_i: "10:30:00",
    hora_f: "11:30:00",
    fecha_reserva: "2021-03-11",
    estado: true,
    comentario: null,
    cuenta: null,
    users_permissions_user: await apiCall(),
    published_at: "2021-03-03T21:46:45.557Z",
    created_at: "2021-03-03T21:46:41.171Z",
    updated_at: "2021-03-03T21:46:45.592Z",
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}


const SpaceModal = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  console.log(selectedDate);
  console.log(props);
  apiAxios();
  return (
    <View style={styles.centeredView}>
      <View>
        <Button title= 'go back' onPress= {() => {
          props.isOpen(false)
        }}/>
        <Image source={{ uri: props.space.url_imagen }} style={styles.img} />
        <Text style={styles.spaceNameText}>{props.space.nombre_espacio}</Text>
      </View>
      <View style={styles.topView}>
        <Text style={styles.txtStyle}>
          Tipo de espacio:{"\n"}
          {"\t"}
          {props.space.tipo_espacio}
        </Text>
        <Text style={styles.txtStyle}>
          Tarifa:{"\n"}
          RD${props.space.tarifa}/hr
        </Text>
        <Text style={styles.txtStyle}>
          Capacidad:{"\n"}
          {"\t"}
          {props.space.capacidad}
        </Text>
      </View>
      <View style={{ marginTop: "10%" }}>
        <TimePicker passDate={setSelectedDate} />
      </View>
      <View style={{ marginTop: "10%" }}>
        <Button
          title="Reservaar"
          style={{ color: "black" }}
          accessibilityLabel="Learn more about this purple button"
          disabled={selectedDate.length < 1 ? true : false}
          onPress={() => {null
          }}
        />
      </View>

      <View>
        <Text style={{ marginTop: "10%", color: "#228B22" }}>Disponible</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    zIndex: 1,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  topView: {
    width: "90%",
    height: "10%",
    zIndex: 2,
    position: "relative",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    marginBottom: "5%",
    width: 415,
    height: 200,
  },

  spaceNameText: {
    marginLeft: 20,
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: "10%",
  },

  txtStyle: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default SpaceModal;
