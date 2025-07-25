import { Text, TextInput,View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


export default function LogIn({navigation}: {navigation: any}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text: string) => {
        setEmail(text);
    }

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    }

    const logInButton = () => {
        navigation.navigate('Home Page');
    }

    return(
        <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.view}
      >
        <Text style = {styles.text}>Welcome Back</Text>
        <TextInput
            style = {styles.input}
            placeholder = "Email"
            placeholderTextColor = "white"
            value = {email}
            onChangeText = {handleEmailChange}
        />
        <TextInput
            style = {styles.input}
            placeholder = "Password"
            placeholderTextColor = "white"
            value = {password}
            onChangeText = {handlePasswordChange}
        />

        <View style = {{alignItems: 'center'}}>
            <TouchableOpacity
                onPress = {logInButton}
                style = {styles.button}
            >
                <Text style = {styles.logInText}>Log In</Text>
            </TouchableOpacity>
        </View>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },

    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    logInText: {
        fontSize: 15
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 10,
        width: 150,
        alignItems: 'center',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
    },

    input: {
        borderRadius: 15,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        color: 'white'
    }

});