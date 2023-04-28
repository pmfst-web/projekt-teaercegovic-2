import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';
import Proizvod from '../components/Proizvod';

import SveKategorije from '../components/SveKategorije'

const PocetniEkran = ({ route, navigation }) => {
  
  
  return (
    <ScrollView vertical={true} style={stil.ekran}>
      

      <View style={stil.slikaOkvir}>
        <Image
          source={require('../assets/images/neacklaces.png')}
          style={stil.slika1}
        />
      </View>

      <View>
        <Text style={StilTekst.tekst}>Category</Text>
      </View>

      

      <ScrollView style={stil.kategorije_sve}>
        <SveKategorije/>
      </ScrollView>


      <View>
        <Text style={StilTekst.tekst}>Trending now!</Text>
      </View>

      <View style={stil.proizvodi}>
        <TouchableOpacity
        onPress={() =>
            navigation.navigate('Detalji')}>
          <Proizvod
            slika={require('../assets/images/necklace/necklace1.jpg')}
            naziv="Green-white necklace"
            cijena="4$"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Proizvod
            slika={require('../assets/images/ring/ring1.jpg')}
            naziv="Beaded rings"
            cijena="4$"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
  },
  slika1: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'strecth',
  },
  slikaOkvir: {
    width: '100%',
    height: 150,
  },
  kategorije_sve: {
    marginHorizontal: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
  },
  proizvodi: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  }
});
export default PocetniEkran;
