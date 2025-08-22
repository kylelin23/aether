import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import Auth from '../../components/Auth'
import { Session } from '@supabase/supabase-js'


export default function HomeScreen({navigation}: {navigation: any}) {

  const logInButton = () => {
    navigation.navigate('Log In');
  }

  const signUpButton = () => {
    navigation.navigate('Sign Up');
  }

  return (
    <View style={styles.main_text}>
      <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.gradient}
      >
        <Text style = {styles.home_page_text}>
          Welcome to Aether
        </Text>
        <Text style = {styles.sub_text}>
          Launch Your Budget, Orbit Your Goals
        </Text>
        <View style = {styles.button_container}>
          <TouchableOpacity
          onPress = {logInButton}
          style = {styles.log_in_button}
          >
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {signUpButton}
          style = {styles.sign_up_button}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  main_text:{
    flex: 1
  },

  gradient:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  home_page_text: {
    color: 'white',
    fontSize: 40,
    marginBottom: 25,
  },

  sub_text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 25,
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

  button_container: {

  },

});
