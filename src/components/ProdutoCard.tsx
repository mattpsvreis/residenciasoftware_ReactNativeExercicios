import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Image, Card } from 'react-native-elements';

export default function ProdutoCard(props: any) {
    const formatBRL = (value: any) => {
        const options = { style: "currency", currency: "BRL"};
        return value.toLocaleString("pt-BR", options);
    }

    const image = `${props.produto.imagemProduto}`;

    return (
        <TouchableOpacity onPress={() => console.log(`${props.produto.nomeProduto} foi clicado(a)`)}>
            <Card containerStyle={props.styles.produtoContainer}>
                <Card.Image
                    source={{uri: image}}
                    style={props.styles.produtoContainerImage}
                    width={undefined}
                    height={undefined}
                />
                <Card.Title style={props.styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
                <Text style={props.styles.textCardValue}>{formatBRL(`${props.produto.precoProduto}`)}</Text>
            </Card>
        </TouchableOpacity>
    )
}
