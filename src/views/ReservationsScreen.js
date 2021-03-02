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

 async componentDidMount() {
    try {
      let response = await fetch('https://fieldfind-backend.herokuapp.com/reservas/');
      let json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Text>{item.espacio.nombre_espacio}</Text>
            )}
          />
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#CDD7D6',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default ReservationsScreen;