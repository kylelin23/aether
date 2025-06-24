import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignUp({navigation}: {navigation: any}){
    const startBudgetingButton = () => {
        navigation.navigate('Stats Screen');
    }

    return(
        <View>
            <Text>Sign Up Page</Text>
            <TouchableOpacity
            onPress = {startBudgetingButton}
            >
                <Text>Start Budgeting Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

});