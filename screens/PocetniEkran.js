import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';

import Kategorije from '../components/Kategorije';
import Proizvod from '../components/Proizvod';

const PocetniEkran = (props) => {
  
  return (
    <ScrollView vertical={true} style={stil.ekran}>
      <View style={StilTekst.zaglavlje}>
        <Text style={StilTekst.naslov}>BEADS</Text>
      </View>

      <View style={stil.slikaOkvir}>
        <Image
          source={require('../assets/images/neacklaces.png')}
          style={stil.slika1}
        />
      </View>

      <View>
        <Text style={StilTekst.tekst}>Category</Text>
      </View>

      <View style={stil.kategorija}>
        <Kategorije />
      </View>

      <View>
        <Text style={StilTekst.tekst}>Trending now!</Text>
      </View>

      <View style={stil.proizvodi}>
        <Proizvod
          slika={require('../assets/images/Flower_Necklace.png')}
          naziv="Flower necklace"
          cijena="3$"
        />
        <Proizvod
          slika={require('../assets/images/Ring_1.png')}
          naziv="Beaded ring"
          cijena="5$"
        />
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
  kategorija: {
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
});
export default PocetniEkran;
