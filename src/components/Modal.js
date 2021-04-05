import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button } from "react-native-elements";

const SpaceModal = (space) => {
  console.log(space);
  return (
    <View>
      <View style={styles.topView}>
        <Text style={{ left: "1%" }}>{space.space.tipo_espacio}</Text>
        <Text style={{ left: "5%" }}>{space.space.tarifa}</Text>
        <Text style={{ left: "10%" }}>{space.space.capacidad}</Text>
      </View>
      <View style={styles.centeredView}>
        <Text>h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    zIndex: 1,
    backgroundColor: "white",
    position: "relative",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  topView: {
    backgroundColor: "white",
    width: "100%",
    height: "10%",
    position: "relative",
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    left: "15%",
    top: "30%",
    
  },
});

export default SpaceModal;
