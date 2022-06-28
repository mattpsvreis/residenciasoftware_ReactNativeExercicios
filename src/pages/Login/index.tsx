import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Text, Icon, Button } from 'react-native-elements';
import { AuthContext } from '../../context/AuthContext';

const Login = ({navigation}: any) => {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const { login } = React.useContext(AuthContext);

    const handleLogin = async (email: string, senha: string) => {
        console.log(`Email: ${email} - Senha: ${senha}`)
        
        const responseLogin = await login(email, senha);
        if(!responseLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "OK" },
                    { text: "Não foi possível realizar o login." },
                ]
            );
        } else {
            navigation.navigate('Home');
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#7054B6',
            padding: 16,
            alignItems: 'stretch',
            justifyContent: 'center'
        },

        title: {
            textAlign: 'center',
            fontSize: 36,
            fontWeight: 'bold',
            marginBottom: 20,
            color: "aliceblue",
            textShadowColor: 'aliceblue',
            textShadowRadius: 4,
        },

        input: {
            color: "aliceblue",
        },

        button: {
            backgroundColor: '#111',
        },
    })
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'Bem-vindo'}</Text>
            <Input
                inputStyle={styles.input}
                placeholder='E-mail'
                placeholderTextColor={'#fff7'}
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon
                    name='user'
                    color='#fffd'
                    type='font-awesome'
                    size={24}
                    tvParallaxProperties={undefined} 
                />} 
                autoCompleteType={undefined}                
            />
            <Input
                inputStyle={styles.input}
                placeholder='Senha'
                placeholderTextColor={'#fff7'}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                leftIcon={<Icon 
                    name='key' 
                    color='#fffd' 
                    type='font-awesome' 
                    size={24} 
                    tvParallaxProperties={undefined} 
                />} 
                autoCompleteType={undefined}
            />
            <Button
                buttonStyle = {styles.button} 
                title='Entrar'
                onPress={() => handleLogin(email, senha)}
            />
        </View>
    );
}

export default Login;