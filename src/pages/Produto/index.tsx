import React from "react";

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Image } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Produto = ({ route, navigation }: any) => {
    const { produto } = route.params;
    console.log("Produto: " + JSON.stringify(produto));

    const { addProduto } = React.useContext(CarrinhoContext);

    const handleAddProduto = () => {
        addProduto(
            produto.sku,
            produto.nomeProduto,
            produto.descricaoProduto,
            produto.precoProduto,
            produto.imagemProduto
        )
    }

    return (
        <View style={styles.body}>
            <Text style={styles.title}>{produto.nomeProduto}</Text>
            <View style={styles.container}>
                <View style={styles.leftSide}>
                    <Image
                        source={{ uri: produto.imagemProduto }}
                        style={styles.image}
                        width={undefined}
                        height={undefined}
                    />
                </View>
                <View style={styles.rightSide}>
                    <Text style={styles.nomeProduto}>{produto.nomeProduto}</Text>
                    <Text style={styles.precoProduto}>R$ {produto.precoProduto},00</Text>
                    <TouchableOpacity style={styles.button} onPress={handleAddProduto}>
                        <Text style={styles.buttonText}>COMPRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>FAVORITAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button onPress={() => navigation.navigate('TabNavigationScreen')} buttonStyle={styles.buttonReturn} title='Voltar' />
        </View>
    )
}

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#242222',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        color: 'aliceblue',
        fontSize: 32,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 10,
    },
    rightSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    nomeProduto: {
        color: 'aliceblue',
        fontSize: 32,
    },
    precoProduto: {
        color: 'aliceblue',
        marginTop: 8,
        fontSize: 24,
    },
    button: {
        backgroundColor: '#fff',
        width: '80%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: "#111",
        fontWeight: 'bold',
    },
    buttonReturn: {
        backgroundColor: '#111',
    },
});

export default Produto;