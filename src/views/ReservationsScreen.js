import React, {Component} from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator} from 'react-native';

class ReservationsScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://fieldfind-backend.herokuapp.com/reservas/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      /*.catch((error) => console.error(error))*/
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Text>{item.espacio.nombre_espacio}</Text>
            )}
          />
        )}
      </View>
    );
  }
};

export default ReservationsScreen;