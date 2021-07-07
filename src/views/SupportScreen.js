import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";

export default class SupportScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenHeader}>
          <Text style={styles.screenHeaderText}>Ayuda</Text>
          <Text style={styles.screenHeaderbrand}>FieldFind</Text>
        </View>
        <Image style={styles.help} source={require("../../assets/Help.png")} />
        <Text style={styles.helperText}>
          En caso de necesitar asistencia con el uso de la aplicacion Field
          Find, favor contactarse con el equipo de soporte{" "}
        </Text>
        <View style={styles.contactbanner}>
          <Image
            style={styles.CallIcon}
            source={require("../../assets/phone.png")}
          />
          <Text style={styles.callText}>Llamar</Text>
          <Text style={{ fontSize: 20, alignSelf: "center", bottom: 28 }}>
            809-630-3481
          </Text>
          <Image
            style={styles.MailIcon}
            source={require("../../assets/MailIcon.png")}
          />
          <Text
            style={{ fontSize: 20, alignSelf: "center", bottom: 35, left: 15 }}
          >
            Chat
          </Text>
          <Text style={{ fontSize: 18, alignSelf: "center", bottom: 30 }}>
            https://fieldfind.tecno-logica.org/
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenHeaderbrand: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  screenHeader: {
    height: "10%",
    backgroundColor: "#384650",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  screenHeaderText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 0,
    marginHorizontal: 10,
    alignSelf: "flex-end",
  },
  help: {
    width: 198,
    height: 229,
    marginTop: 50,
    alignSelf: "center",
  },
  helperText: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  contactbanner: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  CallIcon: {
    width: 39,
    height: 40,
    alignSelf: "center",
    right: 40,
    marginTop: 10,
  },
  callText: {
    fontSize: 24,
    bottom: 35,
    left: 33,
    alignSelf: "center",
  },
  MailIcon: {
    width: 38,
    height: 37.63,
    right: 40,
    alignSelf: "center",
  },
});
