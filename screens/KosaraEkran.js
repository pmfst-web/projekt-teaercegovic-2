import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';

import Proizvod from '../components/Proizvod';

import {useEffect,useState} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import { dodajNakit, ukloniNakit } from '../store/reducers/nakitSlice';

const KosaraEkran = ({route,navigation}) => {
  const kosara = useSelector((state)=>state.nakit.kosarica)
  console.log('u kosari')
  console.log(kosara)

  
  
  


  return (
    <SafeAreaView>
    <View>
    <ScrollView vertical={true} style={stil.ekran}>

      <View style={StilTekst.zaglavlje}>
        <Text>Kosara</Text>
      </View>

      
    </ScrollView>
    </View>
    <View >
          
           
            <View >
            <Text >Order Total</Text>
            <Text > kn</Text>

          </View>
          <TouchableOpacity >
            <Text >Place order</Text>
          </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
  },
  
});
export default KosaraEkran;
