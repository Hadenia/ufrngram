import React from 'react';
import { StyleSheet, Text, Image, FlatList, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {

    const feed = [
        {
            id: 1,
            nome: 'Piu Piu',
            imgPerfil: require('../assets/imagens/piupiu.jpg'),
            img: require('../assets/imagens/tinytoons.jpg'),
            aspectRatio: 1.777,
        },
        {
            id: 2,
            nome: 'Perna',
            imgPerfil: require('../assets/imagens/pernalonga.png'),
            img: require('../assets/imagens/tinytoons3.jpg'),
            aspectRatio: 1.595,
        },
        {
            id: 3,
            nome: 'Taz',
            imgPerfil: require('../assets/imagens/taz.jpg'),
            img: require('../assets/imagens/tinytoons2.jpg'),
            aspectRatio: 0.712,
        }
    ];

    function renderItem({ item }) {
        return <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image source={item.imgPerfil} style={styles.postheaderimg} />
                        <Text >{item.nome}</Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image source={item.img} aspectRatio={item.aspectRatio} style={styles.postimg} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
                </View>
            </View>        
    }


    return (
        <View style={styles.feed}>
            <FlatList
                data={feed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    feed: {
        flex: 1,
        backgroundColor: "#fff",
    },

    post: {
        backgroundColor: "#fff",
    },

    postheader: {
        height: 60,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
    },

    postheaderesquerda: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    postheaderimg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },

    postimg: {
        //aspectRatio={1.777} esse valor é altura/largura
        width: '100%', //conforme o tamanho da tela
        height: undefined,
    },

    footer: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',

    },

    footericon: {
        margin: 5,
    },
});
