import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";


export default function App() {

  const [spaces, setSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        {isLoading ? spaces.map((space) => (
          <Marker key= {space.id} coordinate= {{
            longitude: space.longitud,
            latitude: space.latitud
          }}></Marker>
          
        )) : null}
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
