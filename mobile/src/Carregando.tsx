import { ActivityIndicator, Modal, View, StyleSheet } from "react-native"
import React from "react"

type CarregandoProps = {
    isCarregando: boolean;
}

const Carregando = (props: CarregandoProps) => {
    return (
        <Modal
            visible={props.isCarregando}
            transparent={false}>
                <View style={styles.container}>
                <ActivityIndicator size="large" />
                </View>
        </Modal>
    );
}
export default Carregando; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})