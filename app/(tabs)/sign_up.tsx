import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignUp({navigation}: {navigation: any}){
    const startBudgetingButton = () => {
        navigation.navigate('Sign Up 2', { name, email, password });
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleEmailChange = (text: string) => {
        setEmail(text);
    }

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    }

    const handleNameChange = (text: string) => {
        setName(text);
    }


    return(
        <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.view}
      >
        <Text style = {styles.text}>New Traveler</Text>
        <TextInput
            style = {styles.input}
            placeholder = "Name"
            placeholderTextColor = "white"
            value = {name}
            onChangeText = {handleNameChange}
        />
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
                onPress = {startBudgetingButton}
                style = {styles.button}
            >
                <Text style = {styles.startBudgetingText}>Next</Text>
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

    startBudgetingText: {
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