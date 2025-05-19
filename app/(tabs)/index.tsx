import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen({navigation}: {navigation: any}) {

  const logInButton = () => {
    navigation.navigate('LogInPage');
  }

  return (
    <View style={styles.main_text}>
      <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.gradient}
      >
        <Text style = {styles.home_page_text}>
          welcome to aether
        </Text>
        <Text style = {styles.sub_text}>
          launch your budget, orbit your goals
        </Text>
        <View style = {styles.button_container}>
          <TouchableOpacity
          onPress = {logInButton}
          style = {styles.log_in_button}
          >
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {() => alert('Going to sign up page')}
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
    fontSize: 50,
    marginBottom: 20,
  },

  sub_text: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
  },

  log_in_button: {
    marginBottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 15,
    width: 250,
    borderRadius: 15
  },

  sign_up_button: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 15,
    width: 250,
    borderRadius: 15
  },

  button_container: {

  },

});
