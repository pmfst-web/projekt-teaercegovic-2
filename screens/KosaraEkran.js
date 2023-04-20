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

const KosaraEkran = (props) => {


  return (
    <ScrollView vertical={true} style={stil.ekran}>

    
      <View style={StilTekst.zaglavlje}>
        <Text>Kosara</Text>
      </View>


    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
  },
  
});
export default KosaraEkran;
