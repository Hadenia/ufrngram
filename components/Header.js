import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ChatListScreen from '../screens/ChatListScreen';


export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/imagens/ufrngram.png')} style={styles.ufrngram} />
      <FontAwesome5 name="paper-plane" size={24} color="black" onPress={() => navigation.navigate(ChatListScreen)} />
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    padding: 10, //borda
    height: 50,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'space-between'  //deixa espaços iguais entre os elementos

  },

  ufrngram: {
    height: 25,
    width: 110,
  },


});