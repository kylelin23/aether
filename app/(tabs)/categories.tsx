import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CategoriesScreen(){

    return(
        <View style = {styles.view}>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>Add Category</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 15,
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: 10,
        width: 175,
    },

    buttonText: {
        fontSize: 20,
    }
});