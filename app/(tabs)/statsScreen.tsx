import { Text, View, StyleSheet, Dimensions } from 'react-native';

export default function StatsScreen(){

    return(
        <View>
            <View style = {styles.container}>
                <Text>Overview</Text>
                <Text>Categories</Text>
            </View>
        </View>
    )
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: screenWidth,
      justifyContent: 'space-around'
    }
});