import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { CategoriaContext } from '../context/CategoriaContext';

export default function CategoriaCard(props: any) {

    const image = `${props.categoria.nomeImagem}`
    const { handleCategoria } = React.useContext(CategoriaContext);

    const handlePress = () => {
        handleCategoria(props.categoria)
        props.navigation.navigate('Categoria')
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Card containerStyle={props.styles.categoryContainer}>
                <Card.Image
                    source={{ uri: image }}
                    width={undefined}
                    height={undefined}
                    style={props.styles.categoryContainerImage}
                />
                <Card.Title style={props.styles.textCardTitle}>{props.categoria.nomeCategoria}</Card.Title>
            </Card>
        </TouchableOpacity>
    );
}