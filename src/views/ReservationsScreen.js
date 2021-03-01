import React, {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
{
  key:"0",
  image:"https://reactnative.dev/img/tiny_logo.png",
  description:"Test image",
}
];

const Item = ({ description,image}) => (
  <View>
    <Image source={{uri:image}} styles={{height:120, width:295, resizeMode:'stretch'}} />
    <Text style={styles.title}>{description}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item description={item.description,item.image} />
);

class ReservationsScreen extends Component{
  render() {
    return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
    );
  }
}

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