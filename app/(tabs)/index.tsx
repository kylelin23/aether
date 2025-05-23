import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '@react-navigation/elements';


export default function HomeScreen() {
  return (
    <View style={styles.main_text}>
      <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.gradient}
      >
        <Text style = {styles.home_page_text}>
          WELCOME TO AETHER
        </Text>
        <Text style = {styles.sub_text}>
          LAUNCH YOUR BUDGET, ORBIT YOUR GOALS
        </Text>
        <View style = {styles.button_container}>
          <TouchableOpacity
          onPress = {() => alert('Going to log in page')}
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
