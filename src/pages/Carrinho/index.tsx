import React from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CarrinhoCard from "../../components/CarrinhoCard";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Carrinho = ({ navigation }: any) => {

    const { listProdutos } = React.useContext(CarrinhoContext)
    const [carrinho, setCarrinho] = React.useState();

    const [refreshing, setRefreshing] = React.useState(false);

    const getDadosCarrinho = () => {
        setCarrinho(listProdutos());
    }

    React.useEffect(() => {
        getDadosCarrinho();
    }, [])

    return (
        <View style={styles.body}>
            <FlatList
                data={carrinho}
                keyExtractor={(k, i) => i.toString()}
                horizontal={false}
                numColumns={1}
                style={styles.produtosContainer}
                renderItem={response => <CarrinhoCard produto={response.item} navigation={navigation} styles={styles} />}
                refreshControl= {
                    <RefreshControl refreshing={refreshing} onRefresh={getDadosCarrinho}/>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#151515',
        padding: 16,
        height: '100%',
    },
    produtosContainer: {
        paddingBottom: 10,
        width: '100%',
    },
    produtoContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
        height: 120,
        marginTop: 15,
    },
    leftSideCard: {
        width: '33%',
    },
    imagemProduto: {
        width: 100,
        height: 100,
    },
    rightSideCard: {
        flex: 1,
        flexDirection: 'row',
        width: '66%',
    },
    rightSideCardLeft: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
    },
    textCardTitle: {
        color: '#151515',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textCardValue: {
        color: '#151515',
        fontSize: 18,
    },
    rightSideCardRight: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    favoriteBtn: {

    },
    removeBtn: {
        marginTop: 8,
    },
})

export default Carrinho;