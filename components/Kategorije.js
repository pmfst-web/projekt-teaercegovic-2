import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native';

import Boje from '../constants/Boje'

const Kategorije = (props) => {

  const Item = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={stil.kategorija}>{item.icon}</View>
      </TouchableOpacity>
    )
  }

  const itemData=[
    {
    icon: (
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/bracelet.png')} />
    ),
    },
    {
    icon: (
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/necklace.png')} />
    ),
    },
    {
    icon: (
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/ring.png')} />
    ),
    },
    {
    icon: (
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/earrings.png')} />
    )
    }
  ]

  return(
    <FlatList 
        data={itemData}
        horizontal={true}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />

  )
}


const stil = StyleSheet.create({
  kategorija: {
    flex: 1,
    minWidth: 100,
    maxWidth: '100%',
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: Boje.pozadina,
    opacity: 0.8,
    borderWidth: 3,
    borderColor: Boje.istaknuto
    
  }
});
export default Kategorije;