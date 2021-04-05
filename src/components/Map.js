import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, View, Image, Modal, Text } from "react-native";

import SpaceModal from "./Modal";
import { Button } from "react-native-elements/dist/buttons/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { clockRunning } from "react-native-reanimated";

export default function App() {
  const [spaces, setSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSpace, setCurrentSpace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSpaces = async () => {
    try {
      let response = await fetch(
        "https://fieldfind-backend.herokuapp.com/espacios/"
      );
      let json = await response.json();

      setSpaces(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading({ isLoading: false });
    }
  };

  useEffect(() => {
    getSpaces();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {isLoading
          ? spaces.map((space) => (
              <Marker
                key={space.id}
                coordinate={{
                  longitude: space.longitud,
                  latitude: space.latitud,
                }}
                description="Un espacio chill"
              >
                <TouchableOpacity onPress={() => {setIsModalOpen(true); setCurrentSpace(space)} }>
                  
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../assets/soccerBall.png")}
                  />
                </TouchableOpacity>
              </Marker>
            ))
          : null}
        <View>
          {isModalOpen ? (
            <View>
              <SpaceModal space={currentSpace}/>
              <Text > Bruh </Text>
            </View>
          ) : null}
        </View>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    zIndex: -1,
    flex: 1,
  },
});
