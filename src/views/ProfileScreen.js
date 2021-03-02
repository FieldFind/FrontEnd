import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import MapView from "../components/Map";
import { TextInput } from "react-native-web";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.headerText}>Perfil</Text>
          <Text style={styles.LogoText}> FieldFind</Text>
        </SafeAreaView>
        <Image
          style={styles.avatar}
          source={require("../../assets/User.png")}
        />
        <Text style={styles.name}>
          {this.props.navigation.getParam("username")}
        </Text>
        <Text style={{ fontSize: 36 }}>Los Alcarrizos </Text>
        <View style={styles.fixToText}>
          <Text style={styles.ToText}>Total de reservas</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.ToText}>Deporte Mas Practicado</Text>
        </View>
        <View style={styles.HorizontalStyle}></View>
        <Text style={{ fontSize: 14 }}>
          {" "}
          Ultima reserva: Santo Domingo Tennis Club
        </Text>
        <Text style={{ fontSize: 14 }}>03/02/2021</Text>
        <Button
          title="Sign out"
          color="#384650"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 70,
    backgroundColor: "#384650",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  LogoText: {
    flex: 1,
    fontSize: 10,
    color: "#fff",
    fontWeight: "100",
    marginBottom: 10,
    textAlign: "right",
    letterSpacing: 1,
  },
  headerText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    marginTop: 30,
    padding: 10,
    alignSelf: "flex-start",
    letterSpacing: 1,
  },
  avatar: {
    width: 286,
    height: 289,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: -15,
    justifyContent: "space-between",
    alignSelf: "center",
    position: "relative",
    marginTop: 5,
  },
  body: {
    marginTop: 40,
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000000",
    alignItems: "center",
    fontWeight: "600",
  },
  fixToText: {
    paddingTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "73%",
    marginBottom: 10,
  },
  ToText: {
    fontSize: 11,
    width: "30%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  lineStyle: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  HorizontalStyle: {
    marginTop: -10,
    backgroundColor: "black",
    height: 0.5,
    width: 300,
    margin: 5,
  },
});
