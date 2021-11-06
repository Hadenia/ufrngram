import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
    return (

        <View style={styles.feed}>
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image source={require('../assets/imagens/piupiu.jpg')} style={styles.postheaderimg} />
                        <Text >Piu Piu</Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image source={require('../assets/imagens/tinytoons.jpg')} aspectRatio={1.777} style={styles.postimg} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
                </View>
            </View>

            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image source={require('../assets/imagens/pernalonga.png')} style={styles.postheaderimg} />
                        <Text >Perna</Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image source={require('../assets/imagens/tinytoons3.jpg')} aspectRatio={1.777} style={styles.postimg} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
                </View>
            </View>

            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image source={require('../assets/imagens/taz.jpg')} style={styles.postheaderimg} />
                        <Text> Taz </Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image source={require('../assets/imagens/tinytoons2.jpg')} aspectRatio={1.777} style={styles.postimg} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
                </View>
            </View>

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
