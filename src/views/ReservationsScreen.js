import React, {Component} from 'react';
import {  
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  ActivityIndicator, 
  Image,
  TouchableOpacity
} from 'react-native';
import FooterNav from '../components/FooterNav';

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
      <SafeAreaView style={styles.container}>
        <View style={styles.screenHeader}>
          <Text style={styles.screenHeaderText}>Reservations</Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}> //constructor(props) needed
            <View>
              <Image 
              source={require('../../assets/outline_home_black_48dp.png')}
              style={styles.screenHeaderImage}/>
            </View>
          </TouchableOpacity>
        </View>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.espacio.nombre_espacio}</Text>
              </View>
            )}
          />
        )}
        <FooterNav/>
      </SafeAreaView>
      
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStyle: 'solid',
    borderBottomWidth:1,
    borderBottomColor:'#D8DDD6'
  },
  itemText: {
    fontSize:20,
    fontWeight:'bold',
  },
  screenHeader:{
    height:'15%',
    backgroundColor: '#384650',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  screenHeaderText:{
    color:'#ffffff',
    fontSize:25,
    fontWeight:'bold',
    marginVertical:0,
    marginHorizontal:10,
    alignSelf:'flex-end'
  },
  screenHeaderImage:{
    marginRight:'10%',
    marginTop:'10%',
    tintColor:'#ffffff',
    height: 30,
    width: 30,
    alignSelf:'flex-end'
  }
});

export default ReservationsScreen;