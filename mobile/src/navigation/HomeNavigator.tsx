import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../telas/TelaLogin";
import Cadastrar from "../telas/TelaCadUsuario";
import TelaPrincipal from "../telas/TelaPrincipal";
import TelaCadNotas from "../telas/TelaCadNotas";
import { UIEventHandler } from "react";
import TelaConNotas from "../telas/TelaConNotas";

type RootStackParamList = {
    Login: undefined;
    Cadastrar: undefined;
    TelaPrincipal: undefined;
    TelaCadNotas: undefined;
    TelaConNotas: undefined;
    TelaAltNotas:(id:string);
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        < Stack.Navigator
            initialRouteName="TelaPrincipal"
            screenOptions={{ headerShown: false }
            }>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            <Stack.Screen name="TelaCadNotas" component={TelaCadNotas} />
            <Stack.Screen name="TelaConNotas" component={TelaConNotas} />
            <Stack.Screen name="TelaAltNotas" component={TelaAltNotas} />
        </Stack.Navigator >
    );
}

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar'>;

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

type CadNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaCadNotas'>;

type ConNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaConNotas'>;

type AltNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaAltNotas'>;

export default HomeNavigator;
export type {LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps, ConNotasProps, AltNotasProps};