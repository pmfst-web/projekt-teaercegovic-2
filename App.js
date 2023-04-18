import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PocetniEkran from './screens/PocetniEkran';



export default function App() {

  return (
    <View style={styles.ekran}>
      <PocetniEkran />
    </View>
  );
}
const styles = StyleSheet.create({
  ekran: {
    flex: 1,
  },
});
