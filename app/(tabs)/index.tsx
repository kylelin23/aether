import { Text, View, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.mainText}>
      <Text>
        Home screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1

  }

});
