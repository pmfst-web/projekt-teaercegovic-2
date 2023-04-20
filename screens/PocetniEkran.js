import * as React from 'react';
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

const PocetniEkran = ({ route, navigation }) => {
  
  const Item = ({ item }) => {
    return (
      <View style={stil.kategorija}>{item.icon}</View>
    )
  }

  const itemData=[
    {
    icon: (
      <TouchableOpacity
      onPress={() =>
            navigation.navigate('Kategorija', {
              vrstaKategorije: 'bracelet',
            })}>
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/bracelet.png')} 
        />
      </TouchableOpacity>
    )},
    {
    icon: (
        <TouchableOpacity
      onPress={() =>
            navigation.navigate('Kategorija', {
              vrstaKategorije: 'necklace',
            })}>
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/necklace.png')} 
        />
      </TouchableOpacity>
    )},
    {
    icon: (
        <TouchableOpacity
      onPress={() =>
            navigation.navigate('Kategorija', {
              vrstaKategorije: 'ring',
            })}>
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/ring.png')} 
        />
      </TouchableOpacity>
    )},
    {
    icon: (
        <TouchableOpacity
      onPress={() =>
            navigation.navigate('Kategorija', {
              vrstaKategorije: 'earrings',
            })}>
        <Image 
        style={{ width: 80, height: 80 }} 
        source={require('../assets/icons/earrings.png')} 
        />
      </TouchableOpacity>
    )}
  ]
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

      <View style={stil.kategorije_sve}>
        <FlatList 
        data={itemData}
        horizontal={true}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
        />
      </View>

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
  },
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
export default PocetniEkran;
