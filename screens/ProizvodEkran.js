import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import Boje from '../constants/Boje';
import StilTekst from '../constants/StilTekst';

import Tipka from '../components/Tipka';

const ProizvodEkran = ({ }) => {
  


  return (
    <View style={stil.ekran}>
      <View style={stil.slikaOkvir}>
        <Image source={require('../assets/images/necklace/necklace1.jpg')} style={stil.slika}/>
      </View>

      <View>
        <Text style={StilTekst.detalji}>Kategorija</Text>
      </View>

      <View>
        <Text style={StilTekst.detalji}>Naziv</Text>
      </View>

      <View>
        <Text style={StilTekst.detalji}>Cijena</Text>
      </View>

      <View>
        <Tipka title="ADD"/>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: Boje.pozadina,
  },
  slika: {
    width: 200,
    height: 200
  },
  slikaOkvir: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProizvodEkran;