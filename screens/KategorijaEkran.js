import  React,{useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';
import Proizvod from '../components/Proizvod';

import {useSelector,useDispatch} from 'react-redux'
import {filterNakiti} from '../store/reducers/nakitSlice'

const KategorijaEkran = ({ route }) => {

  const prikaz = route.params.vrstaKategorije;
  console.log(prikaz)

  const dispatch = useDispatch();
  
  const sviNakiti=useSelector((state)=>state.nakit.filterNakiti)
  console.log(sviNakiti)

  const filterNakit=()=>{
    dispatch(filterNakiti("bracelet"));
  }

useEffect(()=>{
  filterNakit();
},[])

console.log(sviNakiti)
  const prikazElelementa = (sviNakiti) => {
    return (
      <Proizvod
        onPress={() => navigation.navigate('Detalji', { id: sviNakiti.id })}
        slika={sviNakiti.slika}
        naziv={sviNakiti.naziv}
        vrsta={sviNakiti.vrsta}
        cijena={sviNakiti.cijena}
      />
    );
  };

  return (
    <ScrollView vertical={true} style={stil.ekran}>

    
      <View style={StilTekst.zaglavlje}>
        <Text>Kategorija:</Text>
      </View>

      <View>

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
