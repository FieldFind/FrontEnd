import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import MapView from "../components/Map"

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile Screen </Text>
       
        <Button
          title="Sign out"
          onPress={() => this.props.navigation.navigate("Login")}
        />

        <MapView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});