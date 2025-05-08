import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen() {
  return (
    <View style={styles.mainText}>
      <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.gradient}
      >
        <Text style = {styles.homePageText}>
          welcome to aether
        </Text>
        <Text style = {styles.subText}>
          launch your budget, orbit your goals
        </Text>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText:{
    flex: 1
  },

  gradient:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  homePageText: {
    color: 'white',
    fontSize: 45,
    marginBottom: 20,
  },

  subText: {
    color: 'white',
    fontSize: 20
  },

});
