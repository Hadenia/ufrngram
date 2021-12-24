import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage  from '@react-native-async-storage/async-storage';

import HomeScreen from './HomeScreen';

export default function LoginScreen ({navigation}){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function logar(){
        const json = {
            user,             //user: user,
            password,       //password: password,
        };

        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  //conteudo enviado - json
            },
            body: JSON.stringify(json)
        };

        const response = await fetch('https://mobile.ect.ufrn.br:3000/login', headerOptions);  //fetch padrão é get

        if (response.status === 200){
            const token = await response.text();
            await AsyncStorage.setItem('TOKEN:', token); //salva o token         
            navigation.navigate(HomeScreen);
        
        } else {
            Alert.alert(
                'Erro',
                'Usuário ou senha inválidos'
            );
        }
    }

    return(
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <View style={styles.loginContainer}>
            <TextInput 
             style={styles.input} 
             placeholder='Usuário' 
             value={user} 
             onChangeText={setUser}/>

            <TextInput 
             style={styles.input} 
             placeholder='Senha'
             value={password}
             secureTextEntry={true} 
             onChangeText={setPassword}/>

            <TouchableOpacity 
                style={styles.sendButton}
                onPress={() => logar()}>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },

    loginContainer: {        
        backgroundColor: "yellow",
        justifyContent: 'center',
        margin: 20, //distancia elementos de fora
        padding: 40, //distancia elementos de dentro
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#f9f6eb',
        borderRadius: 10,
    },

    input:{
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingLeft: 10,
    },

    sendButton:{
        padding: 10,
        width: 120,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
    }
});