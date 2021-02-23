import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center",
    },
});

const ReservationsScreen = () => {
  return (
    <View style={styles.container} >
        <Text>Reservations Screen</Text>
    </View>
  );
}

export default ReservationsScreen;