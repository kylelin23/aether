import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignUp({navigation}: {navigation: any}){
    const startBudgetingButton = () => {
        navigation.navigate('Home Page');
    }

    return(
        <View style = {styles.view}>
            <Text>New Traveler</Text>
            <TouchableOpacity
            onPress = {startBudgetingButton}
            >
                <Text>Start Budgeting Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});