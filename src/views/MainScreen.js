import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import MapView from "../components/Map";

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView />
        <Button
          style={styles.Button}
          title="Profile"
          onPress={() =>
            this.props.navigation.navigate("Profile", {
              username: this.props.navigation.getParam("username"),
            })
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
