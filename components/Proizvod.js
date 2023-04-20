import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Boje from '../constants/Boje'

const Proizvod = ({slika, naziv, cijena}) => {

  return(
    <View style={stil.okvir}>
      <Image source={slika} style={stil.slika}/>
     
      <Text  style={stil.tekst}>{naziv}</Text>
    
      <Text style={stil.tekst}>{cijena}</Text>
    </View>

  )
}

const stil = StyleSheet.create({
  slika: {
    height: 120,
    width: 120,
    resizeMode:'center'
  },
  okvir: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Boje.pozadina,
    borderColor: Boje.istaknuto,
    borderWidth:3,

  },
  tekst:{
    fontFamily: 'sans-serif',
    justifyContent:'center',
    fontSize: 14,
    paddingBottom: 2,
    flexWrap: 'wrap'
  }
});
export default Proizvod;