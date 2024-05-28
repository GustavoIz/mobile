import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';
import Carregando from '../Carregando';
import auth from "@react-native-firebase/auth";
import { CadUsuarioProps } from '../navigation/HomeNavigator';

const cadastrar = ({ navigation, route }: CadUsuarioProps ) => {
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState(''); 
    const [confirmSenha, setconfirmSenha] = useState(''); 
    const [isCarregando, setIsCarregando] = useState(false); 




function verificaCampos(){
    if (email == ''){
        Alert.alert("Email em branco", "Digite um email")
        return false;
    }
    if (senha == ''){
        Alert.alert("Senha em branco", "Digite uma senha")
        return false;
    }
    if (confirmSenha == ''){
        Alert.alert("confirmar senha em branco", "Digite uma senha")
        return false;
    }
    if (senha != confirmSenha){
        Alert.alert("a senha não é igual a confirmada", "Digite uma senha")
        return false;
    }

    return true;
}


     function cadastrar() {
         setIsCarregando(true);

        if (verificaCampos()) {
            auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert("Conta","Cadastrado com sucesso")
                navigation.goBack();
            });
        }
      setIsCarregando(false);
    }


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

return (
    <View style={styles.container}>
        <Carregando isCarregando={isCarregando} />
        <View style={styles.painel_imagem}>
            <Image 
                style={styles.imagem} 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} />
        </View>
        
        <View style={styles.container_login}>
            <Text
                style={styles.titulo_caixa_texto}>
                Nome
            </Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => {setEmail(text)}}/>

            <Text
                style={styles.titulo_caixa_texto}>
                Senha
            </Text>
            <TextInput
                style={styles.caixa_texto} 
                secureTextEntry={true}
                onChangeText={(text) => {setSenha(text)}}/>
                <Text
                style={styles.titulo_caixa_texto}>
                Confirmar senha
            </Text>
            <TextInput
                style={styles.caixa_texto}
                secureTextEntry={true} 
                onChangeText={(text) => {setconfirmSenha(text)}}/>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                onPress={() => {cadastrar()}}>
                disabled={isCarregando}
                <Text style={styles.desc_botao}>cadastrar</Text>
            </Pressable>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.desc_botao}>logar</Text>
            </Pressable>
        </View>
    </View>
);
}

export default cadastrar;

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
