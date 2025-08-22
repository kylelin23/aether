import React, { useState } from 'react'
import { Alert, StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
import { supabase } from '../lib/supabase'

export default function Auth({navigation}: {navigation: any}) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
        navigation.navigate('Log In');
    }

    async function signUpWithEmail() {
        setLoading(true)
        const {
        data: { session },
        error,
        } = await supabase.auth.signUp({
        email,
        password,
        })

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
        navigation.navigate('Sign Up');
    }

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor='gray'
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor='gray'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
        />
        <TouchableOpacity
          onPress = {signInWithEmail}
          style = {styles.log_in_button}
          >
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {signUpWithEmail}
          style = {styles.sign_up_button}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {

    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        padding: 12,
        marginBottom: 12,
        color: 'white'
    },
    button: {
        marginVertical: 6,
    },

    log_in_button: {
        marginBottom: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 15,
        width: 250,
        borderRadius: 15,
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
    },

    sign_up_button: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 15,
        width: 250,
        borderRadius: 15,
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
    },

})
