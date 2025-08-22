import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import Auth from '../../components/Auth'
import { Session } from '@supabase/supabase-js'


export default function HomeScreen({navigation}: {navigation: any}) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])



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
          navigation.navigate('Home Page');
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
          navigation.navigate('Home Page');
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
        <View>
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

});
