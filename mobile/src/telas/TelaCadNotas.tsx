import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';

import firestore from "@react-native-firebase/firestore";
import Carregando from '../Carregando';
import {CadNotasProps} from "../navigation/HomeNavigator";
import { INotas } from '../model/INotas';

const TelaCadNotas = ({ navigation, route }: CadNotasProps ) => {
    const [titulo, setTitulo] = useState(''); 
    const [descricao, setDescricao] = useState(''); 
    const [isCarregando, setIsCarregando] = useState(false); 


    function cadastrar() {
        setIsCarregando(true);
        if(verificaCampos()){
            let nota = {
                titulo: titulo,
                descricao: descricao,
                created_at:firestore.FieldValue.serverTimestamp()
            } as INotas;

            firestore()
            .collection('notas')
            .add(nota)
            .then(() => {
                Alert.alert("Nota","Cadastrada com sucesso")
                navigation.navigate('TelaPrincipal')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
        }
        setIsCarregando(false);
    }

function verificaCampos(){
    if (titulo == ''){
        Alert.alert("Titulo em branco","Digite um email")
        return false;
    }
    if (descricao == ''){
        Alert.alert("Descricao em branco",
         "Digite uma senha")
        return false;
    }
    

    return true;
}

    return(
        <View>
            <Carregando isCarregando={isCarregando} />

            <Text>Titulo</Text>
            <TextInput
            style={styles.caixa_texto}
            onChangeText={(text) => { setTitulo(text) }} />
    
    <Text>Descrição</Text>
    <TextInput
        multiline
        numberOfLines={4}
        maxLength={100}
        style={styles.caixa_texto}
        onChangeText={(text) => { setDescricao(text)}} />
        <Pressable
        style={styles.botao}
        onPress={() => cadastrar()}
        disabled={isCarregando}>
        <Text style={styles.desc_botao}>Cadastrar</Text>
        </Pressable>
        </View>
    )

function tratarErros(erro: string){
    console.log(erro);
    if(erro.includes("[auth/invalid-email]")){
        Alert.alert("Email inválido", "Digite um email válido")
    } else if(erro.includes("[auth/weck-password]")){
        Alert.alert("Senha fraca", "A senha digitada é fraca. A senha deve conter pelo menos 6 digitos")
    } else if(erro.includes("[auth/email-already-in-use")){
        Alert.alert("email em uso", "O email inserido já foi cadastrado em outra conta.")
    }else{
        Alert.alert("Erro", erro)
    }
}

}

export default TelaCadNotas;

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
