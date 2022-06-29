import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Image, Card } from 'react-native-elements';
import { styles } from '../pages/Home';

export default function ProdutoCard(props: any) {
    const formatBRL = (value: any) => {
        const options = { style: "currency", currency: "BRL"};
        return value.toLocaleString("pt-BR", options);
    }

    const image = `${props.produto.imagemProduto}`;

    return (
        <TouchableOpacity onPress={() => console.log(`${props.produto.nomeProduto} foi clicado(a)`)}>
            <Card containerStyle={styles.recenteContainer}>
                <Card.Image
                    source={{uri: image}}
                    style={{ width: 120, height: 120, marginBottom: 10 }}
                    width={undefined}
                    height={undefined}
                />
                <Card.Title style={styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
                <Text style={styles.textCardValue}>{formatBRL(`${props.produto.precoProduto}`)}</Text>
            </Card>
        </TouchableOpacity>
    )
}
