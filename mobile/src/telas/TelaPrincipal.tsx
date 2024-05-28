import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';

import auth from "@react-native-firebase/auth";
import { PrincipalProps } from '../navigation/HomeNavigator';

const TelaPrincipal = ({ navigation, route }:PrincipalProps ) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo_caixa_texto}>Bem vindo</Text>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                onPress={() => {navigation.navigate('TelaCadNotas')}}>
                <Text style={styles.desc_botao}>Cadastrar nota</Text>
            </Pressable>
        </View>
    )
}
        
export default TelaPrincipal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366'
    },
    container_login: {
        flex: 2,
        alignItems: 'center'
    },
    titulo_caixa_texto:{
        fontSize: 25,
        color: 'white'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    },
    painel_imagem: {
        flex:1,
        alignItems:'center', 
        justifyContent:'center'
    },
    imagem: { 
        width: 200, 
        height: 200, 
        resizeMode: "center"
    }
});
