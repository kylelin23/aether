import { View, Text, StyleSheet } from 'react-native';

export default function OverviewBottomScreen(){

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
        padding: 15,
    },

    text: {
        color: 'white',
    },

    title: {
        color: 'white',
        fontSize: 50,
        marginBottom: 50,
    }
});