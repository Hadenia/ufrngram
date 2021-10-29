import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require('./assets/imagens/ufrngram.png')} style={styles.ufrngram} />
        <FontAwesome5 name="paper-plane" size={24} color="black"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#C0C0C0',
    marginTop: Constants.statusBarHeight,
  },

  header:{
    flexDirection: 'row',
    padding: 10, //borda
    height: 50,
    backgroundColor: "#0f0",
    alignItems: 'center',
    justifyContent: 'space-between'  //deixa espaços iguais entre os elementos
    
  },

  ufrngram:{
    height: 25,
    width: 110,
  }


});

