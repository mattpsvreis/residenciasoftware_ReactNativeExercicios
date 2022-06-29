import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-elements';

export default function ProdutoCard(props: any) {

    const image = `${props.produto.imagemProduto}`;

    return (
        <TouchableOpacity onPress={() => console.log(`${props.produto.nomeProduto} foi clicado(a)`)}>
            <Card containerStyle={props.styles.produtoContainer}>
                <Card.Image
                    source={{ uri: image }}
                    style={props.styles.produtoContainerImage}
                    width={undefined}
                    height={undefined}
                />
                <Card.Title style={props.styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
                <Text style={props.styles.textCardValue}>R$ {parseFloat(props.produto.precoProduto).toFixed(2).replace('.',',')}</Text>
            </Card>
        </TouchableOpacity>
    )
}
