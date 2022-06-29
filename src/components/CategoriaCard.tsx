import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';
import { styles } from '../pages/Home'

export default function CategoriaCard(props: any) {

    const image = `${props.categoria.nomeImagem}`

    const handlePress = () => {
        props.navigation.navigate('CategoriaDrawerScreen')
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Card containerStyle={styles.categoryContainer}>
                <Card.Image
                    source={{uri: image}}
                    width={undefined}
                    height={undefined}
                    style={{width: 120, height: 120, marginBottom: 10}}
                />
                <Card.Title style={styles.textCardTitle}>{props.categoria.nomeCategoria}</Card.Title>
            </Card>
        </TouchableOpacity>
    );
}