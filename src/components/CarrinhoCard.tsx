import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Image, Icon } from 'react-native-elements';
import { CarrinhoContext } from '../context/CarrinhoContext';

export default function CarrinhoCard(props: any) {

    const { removeProduto } = React.useContext(CarrinhoContext);

    const handleFavorite = () => {
        return null; // TODO
    }
    
    const handleRemove = () => {
        removeProduto(props.produto.idProduto);
    }

    return (
        <View style={props.styles.produtoContainer}>
            <View style={props.styles.leftSideCard}>
                <Image
                    source={{ uri: props.produto.imagemProduto }}
                    style={props.styles.imagemProduto}
                    width={undefined}
                    height={undefined}
                />
            </View>
            <View style={props.styles.rightSideCard}>
                <View style={props.styles.rightSideCardLeft}>
                    <Text style={props.styles.textCardTitle}>{props.produto.nomeProduto}</Text>
                    <Text style={props.styles.textCardValue}>R$ {parseFloat(props.produto.precoProduto).toFixed(2).replace('.',',')}</Text>
                </View>
                <View style={props.styles.rightSideCardRight}>
                    <TouchableOpacity onPress={handleFavorite} style={props.styles.favoriteBtn}>
                        <Icon name='heart' color ='#151515' type='font-awesome' size={30} tvParallaxProperties={undefined}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRemove} style={props.styles.removeBtn}>
                        <Icon name='trash' color ='#151515' type='font-awesome' size={30} tvParallaxProperties={undefined}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
