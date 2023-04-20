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

import Proizvod from '../components/Proizvod';

const KategorijaEkran = ({ route, navigation }) => {
  const { vrstaKategorije } = route.params;
  
  const prikazProizvoda = (podaci) => {
    return (
      <Proizvod
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        natpis={podaci.item.student}
      />
    );
  };

  return (
    <ScrollView vertical={true} style={stil.ekran}>

    
      <View style={StilTekst.zaglavlje}>
        <Text>Kategorija: {vrstaKategorije}</Text>
      </View>


    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
  },
  
});
export default KategorijaEkran;
