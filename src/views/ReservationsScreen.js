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

class ReservationsScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true
    };
  }

 async componentDidMount() {
    try {
      let response = await fetch('https://fieldfind-backend.herokuapp.com/reservas/');
      let json = await response.json();
      this.setState({ data: json }, ()=> {console.log(json[0].espacio.latitud)});
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, isLoading } = this.state;
    console.log(data[0]?.espacio?.capacidad)

    return (
      <SafeAreaView 
        style={styles.container}>
        {isLoading ? 
        <ActivityIndicator 
          color='blue' 
          size='large' 
          style={{
              alignSelf:'center',
              marginTop:'50%'}}/> : 
        (<FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              disabled={!item.estado}
              activeOpacity={0.5}
              onPress={()=>{
                this.props.navigation.navigate("DetailReservation",
                {item: item})}}>              
                <Image
                  source={{uri: item.espacio.url_imagen}}
                  style={{width:'100%', height: 150}}/>         
                <View 
                  style={styles.item}>                
                  <Text 
                    style={item.estado ? styles.itemText: styles.inactiveItemText}>{
                      item.espacio.nombre_espacio}
                  </Text>
                </View>
            </TouchableOpacity>
            )}
        />)}
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
  inactiveItemText: {
    fontSize:20,
    fontWeight:'bold',
    opacity: 0.5,
  },
  screenHeader:{
    height:'15%',
    backgroundColor: '#384650',
    padding:'2%',
    justifyContent:'flex-end'
  },
  screenHeaderText:{
    color:'#ffffff',
    fontSize:25,
    fontWeight:'bold'
  }
});

export default ReservationsScreen;