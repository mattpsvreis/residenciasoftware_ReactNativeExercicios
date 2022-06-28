import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-elements';
import { styles } from '../pages/Home';

export default function ProdutoCard(props: any) {
    return (
        <TouchableOpacity onPress={() => console.log(`${props.produto.nomeProduto} foi clicado(a)`)}>
            <Card containerStyle={styles.recenteContainer}>
                <Card.Image
                    source={require('../assets/image.png')}
                    style={{ width: 120, height: 120 }}
                    width={undefined}
                    height={undefined}
                />
                <Card.Divider />
                <Card.Title style={styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
                <Text style={styles.textCardDescription}>Quantidade: {props.produto.quantidade}</Text>
            </Card>
        </TouchableOpacity>
    )
}
