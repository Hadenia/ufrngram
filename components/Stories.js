import React from 'react';
import { StyleSheet, Text, Image, View, FlatList} from 'react-native';


export default function Stories() {
  const stories = [
    {
      id: 1,
      nome: 'Perna',
      src: require('../assets/imagens/pernalonga.png'),
    },
    {
      id: 2,
      nome: 'Taz',
      src: require('../assets/imagens/taz.jpg'),
    },
    {
      id: 3,
      nome: 'Patolino',
      src: require('../assets/imagens/patolino.jpg'),
    },
    {
      id: 4,
      nome: 'Piu Piu',
      src: require('../assets/imagens/piupiu.jpg'),
    },
    {
      id: 5,
      nome: 'Frajola',
      src: require('../assets/imagens/frajola.jpg'),
    },
    {
      id: 6,
      nome: 'Felicia',
      src: require('../assets/imagens/felicia.png'),
    },

  ];

/*Retornar o item do array anterior*/
  
function renderItem({item}){
    return <View style={styles.story}>
        <Image source={item.src} style={styles.imgstory} />
        <Text>{item.nome}</Text>
      </View>
}


  return (
    <View style={styles.stories}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
