import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen({navigation} : {navigation: any}){

    const logout = () => {
        navigation.navigate("Home");
    }

    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={logout}>
                <Text style = {styles.text}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 30
    }
});