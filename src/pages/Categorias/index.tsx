import React from "react";

import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { AuthContext } from '../../context/AuthContext';

import AxiosInstance from "../../api/AxiosInstance";
import CategoriaCard from "../../components/CategoriaCard";
import CategoriaType from "../../models/CategoriaType";
import { CategoriaContext } from "../../context/CategoriaContext";

const Categorias = ({ navigation }: any) => {

    const { user } = React.useContext(AuthContext);

    const [categorias, setCategorias] = React.useState<CategoriaType[]>([]);
    const [categoriasIsLoading, setCategoriasIsLoading] = React.useState(true);

    const [search, setSearch] = React.useState('');

    const getDadosCategorias = async () => {
        AxiosInstance
            .get('/categoria', { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(result => {
                setCategorias(result.data);
                setCategoriasIsLoading(false);
            })
            .catch((error) => {
                console.log('Erro ao carregar a lista de categorias: ' + JSON.stringify(error))
            });
    }

    const pesquisarCategorias = (search: string) => {
        if (search !== '') {
            setCategorias(
                categorias.filter(res => res.nomeCategoria.toLowerCase().includes(search.toLowerCase())),
            );
        } else {
            getDadosCategorias();
        }
    }

    React.useEffect(() => {
        getDadosCategorias();
    }, []);

    React.useEffect(() => {
        pesquisarCategorias(search);
    }, [search])

    return (
        <View style={styles.container}>
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

            {categoriasIsLoading ?
                <ActivityIndicator size='large' color='#fff' />
                :
                <FlatList
                    data={categorias}
                    horizontal={false}
                    contentContainerStyle={styles.categoriesContainer}
                    renderItem={response => <CategoriaCard categoria={response.item} navigation={navigation} styles={styles} />}
                />
            }
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181717'
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
        paddingBottom: 70,
        alignItems: 'center'
    },
    categoryContainer: {
        padding: 0,
        width: 270,
        height: 300,
        alignItems: 'center'
    },
    categoryContainerImage: {
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

export default Categorias;