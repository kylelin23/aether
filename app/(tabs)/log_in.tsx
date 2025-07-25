import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function LogIn({navigation}: {navigation: any}){
    const logInButton = () => {
        navigation.navigate('Home Page');
    }

    return(
        <View style = {styles.view}>
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
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});