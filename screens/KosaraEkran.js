import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Pressable
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';

import Proizvod from '../components/Proizvod';

import Tipka from '../components/Tipka';

import {useEffect,useState} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import { dodajNakit, ukloniNakit } from '../store/reducers/nakitSlice';

const KosaraEkran = ({route,navigation}) => {
  const kosara = useSelector((state)=>state.nakit.kosarica)
  console.log('u kosari')
  console.log(kosara)

  const ukupno=kosara.reduce((total,item)=>total+=item.cijena,0)

  const uklanjanje=(nakit)=>{
    dispatch(ukloniNakit(nakit))
  }
  
  


  return (
    <SafeAreaView>
    <ScrollView vertical={true} style={stil.ekran}>

      <View style={stil.proizvodi}>

    	{kosara.map((nakit,index)=>(

        <View key={index} style={stil.uKosarici}>

          <Image source={nakit.slika} style={stil.slika}/>

          <View> 

          <Text style={stil.tekst1}>{nakit.vrsta}</Text>
          <Text style={stil.tekst2}>Price: {nakit.cijena}€</Text>
          
          </View>        
        </View>
        
      ))}

      </View>

      </ScrollView>
      
      <View style={stil.kraj}>
        <View >
          <Text style={stil.order}>Order Total: {ukupno}€</Text>
        </View>
        <Tipka title="Place order" />
      </View>


      

    </SafeAreaView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
  },
  uKosarici:{
    flexDirection:'row',
    alignItems:'center',
    margin:5,
    width: 200
  },
  proizvodi:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 5,
  },
  slika:{
    height:90, 
    width:90,
    margin:2
  },
  tekst1:{
    fontFamily: 'sans-serif',
    justifyContent:'center',
    fontSize: 10,
    paddingTop: 2,
    flexWrap: 'wrap',
  },
  tekst2:{
    fontFamily: 'sans-serif',
    justifyContent:'center',
    fontSize: 14,
    paddingTop: 2,
    flexWrap: 'wrap',
  },
  order:{
    fontFamily: 'sans-serif',
    justifyContent:'center',
    fontSize: 20,
    paddingTop: 2,
    flexWrap: 'wrap',
    padding:10
  },
  kraj:{
    alignItems:'center',
    justifyContent:'space-evenly',

  }
  
  
  
});
export default KosaraEkran;
