import { View, Text, StyleSheet } from 'react-native';

export default function OverviewUpperScreen(){

    return(
        <View style = {styles.view}>
            <Text style = {styles.title}>May 2025</Text>
            <Text style = {styles.text}>Remaining Budget: $125</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 10,
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