import  React,{useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';
import Proizvod from '../components/Proizvod';

import {useSelector,useDispatch} from 'react-redux'
import {filterNakiti, favoritNakiti} from '../store/reducers/nakitSlice'

const ProizvodiEkran = ({ route }) => {
  const prikaz = route.params.prikaz
  console.log(prikaz)
  
  const nakitiPrikaz =  useSelector(state => {
    if (prikaz === 'all'){
      return state.nakit.nakit
    } else if (prikaz === 'fav')
    {
      return state.nakit.favoritNakiti
    }
    return null
  }) 

/*
  const kat = route.params.vrstaKategorije;
  console.log(kat)

  const dispatch = useDispatch();
  const sviNakiti=useSelector((state)=>state.nakit.filterNakiti)
  console.log(sviNakiti)

  const filterNakit=()=>{
    dispatch(filterNakiti("bracelet"));
  }

useEffect(()=>{
  filterNakit();
},[])
console.log(sviNakiti)*/

  const prikazElelementa = (podaci) => {
    return (
      <Proizvod
        onPress={() => navigation.navigate('Jewerly details', { id: podaci.item.id })}
        slika={podaci.item.slika}
        vrsta={podaci.item.vrsta}
        cijena={podaci.item.cijena}
        id={podaci.item.id}
      />
    );
  };

  return (
    <ScrollView vertical={true} style={stil.ekran}>

      <View style={stil.proizvodi}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={nakitiPrikaz}
          renderItem={prikazElelementa}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>

    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
  },
  proizvodi:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  } 
});
export default ProizvodiEkran;
