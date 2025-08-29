import { useState } from 'react';
import { Dimensions, Text, Modal, TouchableOpacity, View, StyleSheet, Alert, TextInput } from 'react-native';
import { addCategory } from '../../services/categoryService';

export default function CategoriesBottomScreen(){

    const [visible, setVisible] = useState(false);

    const [categoryName, setCategoryName] = useState('');
    const [totalBudget, setTotalBudget] = useState('');

    const addCategoryButton = () => {
        setVisible(!visible);
    }

    const handleTextChange = (text: string) => {
        setCategoryName(text);
    }

    const handleTextChange2 = (text: string) => {
        setTotalBudget(text);
    }

    const enterButton = () => {
        setCategoryName('');
        setTotalBudget('');
        setVisible(!visible);
        const parsedText = parseInt(totalBudget, 10);
        if (totalBudget !== '' && isNaN(parsedText)) {
            Alert.alert("Invalid Input", "Please enter a valid number for the budget.");
            return;
        }
        addCategory(categoryName, parsedText);

    }

    return(
        <View style = {styles.view}>
            <TouchableOpacity
                style = {styles.button}
                onPress = {addCategoryButton}
            >
                <Text style = {styles.buttonText}>Add Category</Text>
            </TouchableOpacity>
            <Modal
                visible = {visible}
                transparent = {true}
                animationType = "none"
                onRequestClose={() => setVisible(false)}
            >
                <View style = {styles.overlay}>
                    <View style = {styles.modalContainer}>
                        <TextInput
                            style = {styles.input}
                            placeholder='Category Name'
                            placeholderTextColor={'white'}
                            value = {categoryName}
                            onChangeText = {handleTextChange}
                        />
                        <TextInput
                            style = {styles.input}
                            placeholder='Total Budget in Dollars (Ex: 100)'
                            placeholderTextColor={'white'}
                            keyboardType="numeric"
                            value = {totalBudget}
                            onChangeText = {handleTextChange2}
                        />
                        <TouchableOpacity
                        onPress = {enterButton}
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


    overlay: {
        backgroundColor : 'rgba(0, 0, 0, 0.4)',
    },

    goalText: {
        color: 'white',
        fontSize: 50,
    },

    enterText: {
        fontSize : 20,
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
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white'
    },

    modalContainer: {
        marginTop: screenHeight - 350,
        height: 250,
        backgroundColor: 'rgb(91, 73, 173)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
});