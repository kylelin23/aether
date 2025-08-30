import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function OverviewUpperScreen(){

    return(
        <LinearGradient
            colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
            style = {styles.view}
        >
            <Text style = {styles.title}>May 2025</Text>
            <Text style = {styles.text}>Remaining Budget: $125</Text>
        </LinearGradient>
    )
}

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        height: (screenHeight - 80)/2,
        gap: 10,
        borderRadius: 15,
    },

    text: {
        color: 'white',
    },

    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
});