import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import Boje from '../constants/Boje';
import StilTekst from '../constants/StilTekst';

import Tipka from '../components/Tipka';

const ProizvodEkran = ({ route, navigation }) => {
  const [favorit, postaviFavorit] = useState(false);
  const idNakita = Number(route.params.id);
  const sviNakiti = useSelector((state) => state.nakit.nakit);
  const nakit = sviNakiti.find((n) => n.id === idNakita);

  const favNakiti = useSelector((state) => state.nakit.favoritNakiti);

  useEffect(() => {
    postaviFavorit(favNakiti.some((n) => n.id === nakit.id));
  }, [favNakiti, nakit]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Product details",
      headerRight: () => {
        return (
          <TouchableOpacity onPress={()=>dispatch(promjenaFavorita(idNakita))}>
            <View>
              <MaterialIcons name={favorit ? "star" : "star-border"} size={26} color='black' />
            </View>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, nakit, dispatch, idNakita, favorit]);

  const dispatch = useDispatch();
  const akcijaFavorit = () => {
    dispatch(promjenaFavorita(idNakita));
  };

  return (
    <View style={stil.ekran}>

      <View style={stil.kartica}>

        <View style={stil.slikaOkvir}>
          <Image source={require(nakit.slika)} style={stil.slika}/>
        </View>

        <View>
          <Text style={StilTekst.detalji}>{nakit.vrsta}</Text>
        </View>

        <View>
          <Text style={StilTekst.imecijena}>{nakit.naziv}</Text>
        </View>

        <View>
          <Text style={StilTekst.imecijena}>{nakit.cijena}</Text>
        </View>

      

        <View style={stil.tipke}>
          <View>
            <Tipka title="Add to cart"/>
          </View>

          <View> 
            <Pressable style={stil.srcebotun} onPress={akcijaFavorit}>
              <MaterialIcons name="favorite" size={26} color='white'/>
            </Pressable>
          </View>
        </View>
      </View>

    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex:1,
    backgroundColor: Boje.istaknuto,
    alignItems: 'center',
  },
  slika: {
    width: 200,
    height: 200
  },
  slikaOkvir: {
    width: 210,
    height: 210,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 7,
  },
  kartica: {
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 210
  },
  tipke:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  srcebotun:{
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.tipka,
    borderColor: Boje.istaknuto,
    borderWidth: 3,
    borderRadius: 5
  }
});

export default ProizvodEkran;