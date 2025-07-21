import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function LogIn({navigation}: {navigation: any}){
    const logInButton = () => {
        navigation.navigate('Stats Screen');
    }

    return(
        <View>
            <Text>Welcome Back</Text>
            <TouchableOpacity
            onPress = {logInButton}
            >
                <Text>Log In Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

});