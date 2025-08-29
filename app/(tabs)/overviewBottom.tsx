import { useState } from 'react';
import { Dimensions, TouchableOpacity, Text, TextInput, View, StyleSheet, Modal } from 'react-native';

export default function OverviewBottomScreen(){

    const [visible, setVisible] = useState(false);

    const editBudgetButton = () => {
        setVisible(!visible);
    }


    return(
        <View style = {styles.view}>
            <TouchableOpacity
                style = {styles.button}
                onPress = {editBudgetButton}
            >
                <Text style = {styles.buttonText}>Edit Budget Goal</Text>
            </TouchableOpacity>
            <Modal
                visible = {visible}
                transparent = {true}
                animationType = "none"
                onRequestClose={() => setVisible(false)}
            >
                <View style = {styles.overlay}>
                    <View style = {styles.modalContainer}>
                        <Text style = {styles.goalText}>Goal</Text>
                        <TextInput
                            style = {styles.input}
                        ></TextInput>
                        <TouchableOpacity
                        onPress = {editBudgetButton}
                        style = {styles.enterContainer}
                        >
                            <Text style = {styles.enterText}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const screenHeight = Dimensions.get('window').height

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
    },

    modalContainer: {
        marginTop: screenHeight - 350,
        height: 250,
        justifyContent: 'center',
        backgroundColor: 'rgb(91, 73, 173)',
        borderRadius: 20,
        alignItems: 'center',
    },

    overlay: {
        backgroundColor : 'rgba(0, 0, 0, 0.4)',
    },

    goalText: {
        color: 'white',
        fontSize: 30,
    },

    enterText: {
        fontSize : 20,
    },

    text: {
        color: 'white',
        fontSize: 25,
    },

    enterContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 45,
        borderRadius: 15,
    },

    input: {
        padding: 5,
        width: 300,
        height: 75,
        borderWidth: 1,
        borderColor: 'white',
        margin: 22,
        color: 'white',
    },

    container: {
        flexDirection: 'row',
        gap: 150,
        marginBottom: 20,
    },
});