import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaterialIcons} from '@expo/vector-icons';

import PocetniEkran from './screens/PocetniEkran';
import KategorijaEkran from './screens/KategorijaEkran';
import KosaraEkran from './screens/KosaraEkran';
import ProizvodEkran from './screens/ProizvodEkran';

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

import StilTekst from './constants/StilTekst';
import Boje from './constants/Boje';

/*
const tabOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let imeIkone;

    if (route.name === 'Fav') {
      imeIkone = focused ? 'favorite' : 'favorite-border';
    } else if (route.name === 'FavPopis') {
      imeIkone = focused ? 'favorite' : 'favorite-border';
    }
    return <MaterialIcons name={imeIkone} size={size} color={color} />;
  },
  tabBarActiveTintColor: Boje.Primarna,
  tabBarInactiveTintColor: Boje.Bijela,
  tabBarStyle: {
    backgroundColor: Boje.Naglasak1,
    height: 60
  },
});

const tabEkrani = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="Fav"
        component={KategorijaEkran}
        initialParams={{ prikaz: 'fav' }}
        options={{ tabBarLabel: 'Favoriti' }}
      />
      <Tab.Screen
        name="Bag"
        component={KosaraEkran}
        initialParams={{ prikaz: 'bag' }}
        options={{ tabBarLabel: 'Kosara' }}
      />
    </Tab.Navigator>
  );
};
*/


export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>

        
      
        <Stack.Screen name="Naslovna" component={PocetniEkran} 
        options={{
              title: 'BEADS',
              headerStyle: {
                backgroundColor: Boje.pozadina,},
              headerTitleStyle:  StilTekst.naslov
            }}
        />



        <Stack.Screen
          name="Kategorija"
          component={KategorijaEkran}
        />

        

        

        <Stack.Screen
          name="Detalji"
          component={ProizvodEkran}
          options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Kosara')}>
                      <View>
                        <MaterialIcons
                          name="shopping-cart"
                          size={26}
                          color='black'
                        />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }
          }
        />


        <Stack.Screen
          name="Kosara"
          component={KosaraEkran}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
});
