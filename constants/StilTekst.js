import React from 'react'
import { StyleSheet} from 'react-native'

import Boje from './Boje'


export default StyleSheet.create({
  zaglavlje: {
    width: "100%",
    height: 60,
    paddingTop: 20,
    backgroundColor: Boje.pozadina,
    alignItems: "center",
    justifyContent: "center"
  },
  naslov: {
    color: "black",
    fontSize: 30,
    fontFamily:'sans-serif'
  },
  tekst:{
    color: "black",
    fontFamily: 'sans-serif',
    fontSize: 20,
    padding: 20
  }
})