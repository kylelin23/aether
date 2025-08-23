import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen({navigation} : {navigation: any}){

    const logout = () => {
        navigation.navigate("Home");
    }

    return(
        <View>
            <TouchableOpacity onPress={logout}>
                <Text style = {styles.text}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});