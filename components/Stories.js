import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


export default function Stories() {
  return (

    <View style={styles.stories}>
      <View style={styles.story}>
        <Image source={require('../assets/imagens/pernalonga.png')} style={styles.imgstory} />
        <Text> Perna </Text>
      </View>
      <View style={styles.story}>
        <Image source={require('../assets/imagens/taz.jpg')} style={styles.imgstory} />
        <Text> Taz </Text>
      </View>
      <View style={styles.story}>
        <Image source={require('../assets/imagens/patolino.jpg')} style={styles.imgstory} />
        <Text> Patolino </Text>
      </View>
      <View style={styles.story}>
        <Image source={require('../assets/imagens/piupiu.jpg')} style={styles.imgstory} />
        <Text> Piu Piu </Text>
      </View>
      <View style={styles.story}>
        <Image source={require('../assets/imagens/frajola.jpg')} style={styles.imgstory} />
        <Text> Frajola </Text>
      </View>
      <View style={styles.story}>
        <Image source={require('../assets/imagens/felicia.png')} style={styles.imgstory} />
        <Text> Felicia </Text>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  stories: {
    flexDirection: "row",
    height: 90,
    backgroundColor: "#fff",
  },

  story: {
    height: 90,
    width: 90,
    backgroundColor: "#fff",
    alignItems: 'center',
  },

  imgstory: {
    height: 70,
    width: 70,
    borderRadius: 35, //Para deixar redondo, metade da altura e metade na largura
  },

});
