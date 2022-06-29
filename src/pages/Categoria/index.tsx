import React from "react";

import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { AuthContext } from '../../context/AuthContext';

import AxiosInstance from "../../api/AxiosInstance";
import ProdutoCard from "../../components/ProdutoCard";
import ProdutoType from "../../models/ProdutoType";
import { CategoriaContext } from "../../context/CategoriaContext";

const Categoria = ({ navigation }: any) => {

    const { user } = React.useContext(AuthContext);

    const [produtos, setProdutos] = React.useState<ProdutoType[]>([]);
    const [produtosIsLoading, setProdutosIsLoading] = React.useState(true);

    const [produtosCategoria, setProdutosCategoria] = React.useState<ProdutoType[]>([]);

    const { idCategoria, nomeCategoria, handleCategoria } = React.useContext(CategoriaContext);

    const getDadosProdutos = async () => {
        AxiosInstance
            .get('/produto', { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(result => {
                setProdutos(result.data);
                setProdutosIsLoading(false);
            })
            .catch((error) => {
                console.log('Erro ao carregar a lista de produtos: ' + JSON.stringify(error))
            });
    }

    React.useEffect(() => {
        getDadosProdutos();
    }, []);

    React.useEffect(() => {
        setProdutosCategoria(produtos.filter(prod => prod.idCategoria === idCategoria));
    }, [produtos])

    React.useLayoutEffect(() => {
        return () => {
            console.log("Categoria Unmounted")
            handleCategoria(undefined)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text3}>Categoria {nomeCategoria}</Text>
            {produtosIsLoading ?
                <ActivityIndicator size='large' color='#fff' />
                :
                <FlatList
                    data={produtosCategoria}
                    horizontal={false}
                    contentContainerStyle={styles.produtosContainer}
                    renderItem={response => <ProdutoCard produto={response.item} styles={styles} />}
                />
            }
            <Button onPress={() => navigation.navigate('CategoriasDrawerScreen')} buttonStyle={styles.button} title='Voltar'/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181717'
    },
    button: {
        backgroundColor: '#111',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 15
    },
    text2: {
        fontSize: 20,
        color: '#fff',
        marginTop: 15,
        marginBottom: 15
    },
    text3: {
        fontSize: 20,
        color: '#fff',
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center'
    },
    produtosContainer: {
        paddingBottom: 70,
        alignItems: 'center'
    },
    produtoContainer: {
        padding: 0,
        width: 270,
        height: 340,
        alignItems: 'center'
    },
    produtoContainerImage: {
        width: 250,
        height: 250,
        marginBottom: 10,
    },
    textCardTitle: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20,
    },
    textCardDescription: {
        color: '#000000',
        textAlign: 'left',
        paddingLeft: 10
    },
    textCardValue: {
        color: '#000000',
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 18
    },
});

export default Categoria;