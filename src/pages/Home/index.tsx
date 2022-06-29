import React from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { Text, Input, Icon, Image, Card } from 'react-native-elements';
import { AuthContext } from '../../context/AuthContext';

import AxiosInstance from "../../api/AxiosInstance";
import ProdutoCard from "../../components/ProdutoCard";
import CategoriaCard from "../../components/CategoriaCard";
import CategoriaType from "../../models/CategoriaType";
import ProdutoType from "../../models/ProdutoType";

const Home = ({navigation}: any) => {

    const { user } = React.useContext(AuthContext);
    const [categoria, setCategoria] = React.useState<CategoriaType[]>([]);
    const [produto, setProduto] = React.useState<ProdutoType[]>([]);

    const [categoriaIsLoading, setCategoriaIsLoading] = React.useState(true);
    const [recenteIsLoading, setRecenteIsLoading] = React.useState(true);

    const getDadosCategoria = async () => {
        AxiosInstance
            .get('/categoria', { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(result => {
                setCategoria(result.data);
                setCategoriaIsLoading(false);
            })
            .catch((error) => {
                console.log('Erro ao carregar a lista de categorias: ' + JSON.stringify(error))
            });
    }

    const getDadosProduto = async () => {
        AxiosInstance
            .get('/produto', { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(result => {
                setProduto(result.data);
                setRecenteIsLoading(false);
            })
            .catch((error) => {
                console.log('Erro ao carregar a lista de produtos: ' + JSON.stringify(error))
            });
    }

    const pesquisarCategoria = (search: string) => {
        if(search !== ''){
            setCategoria(
                categoria.filter(res => res.nomeCategoria.toLowerCase().includes(search.toLowerCase())),
              ); 
        } else {
            getDadosCategoria();
        }       
    }

    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        getDadosCategoria();
        getDadosProduto();
    }, []);

    React.useEffect(() => {
        pesquisarCategoria(search);
    }, [search])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={styles.searchBox}>
                    <Input
                        placeholder="ex: Camisas"
                        onChangeText={setSearch}
                        inputContainerStyle={styles.inputContainer}
                        value={search}
                        leftIcon={
                            <Icon
                                name="search"
                                color="#a49595"
                                type="font-awesome"
                                size={20}
                                containerStyle={styles.iconContainer}
                                tvParallaxProperties={undefined}
                            />
                        }
                        placeholderTextColor={'#a49595'}
                        autoCompleteType={undefined}
                    />
                </View>

                <Text style={styles.text2}>Categorias</Text>

                {categoriaIsLoading ? 
                    <ActivityIndicator size='large' color='#fff'/>
                :
                    <FlatList
                        data={categoria}
                        horizontal={true}
                        style={styles.categoriesContainer}
                        renderItem={response => <CategoriaCard categoria={response.item} navigation={navigation} styles={styles}/>}
                    />
                }

                <Text style={styles.text2}>Produtos</Text>

                {recenteIsLoading ? 
                    <ActivityIndicator size='large' color='#fff'/>
                :
                    <FlatList
                        data={produto}
                        horizontal={true}
                        style={styles.produtosContainer}
                        renderItem={response => <ProdutoCard produto={response.item} styles={styles}/>}
                    />
                }

                <Text style={styles.text3}>Destaques</Text>

                <View>
                    <Image
                        source={require('../../assets/cardDestaques.png')}
                        style={{ width: 380, height: 300, marginBottom: 40 }}
                        height={undefined}
                        width={undefined}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181717'
    },
    body: {
        backgroundColor: '#242222',
        padding: 16
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
        marginBottom: 15
    },
    searchBox: {
        flexDirection: 'row'
    },
    inputContainer: {
        backgroundColor: '#fff',
        margin: -8,
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 5,
        height: 40
    },
    iconContainer: {
        padding: 10
    },
    categoriesContainer: {
        paddingBottom: 10,
    },
    categoryContainer: {
        padding: 0,
        width: 120,
        height: 175
    },
    categoryContainerImage: {
        width: 120,
        height: 120,
        marginBottom: 10
    },
    produtosContainer: {
        paddingBottom: 10,
    },
    produtoContainer: {
        padding: 0,
        width: 120,
        height: 210
    },
    produtoContainerImage: {
        width: 120,
        height: 120,
        marginBottom: 10
    },
    textCardTitle: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    textCardDescription: {
        color: '#000000',
        textAlign: 'left',
        paddingLeft: 10
    },
    textCardValue: {
        color: '#000000',
        textAlign: 'center',
        paddingLeft: 10
    },
    destaqueContainer: {
        width: 380,
        height: 150,
        backgroundColor: '#8e10e2',
    },
});

export default Home;