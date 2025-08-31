import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, Text, Modal, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';
import { fetchCategories, removeCategory } from '../../services/categoryService';
import { addTransaction } from '../../services/transactionService';


export default function CategoriesUpper(){

    const [visible, setVisible] = useState(false);
    const [transactionName, setTransactionName] = useState('');
    const [amountSpent, setAmountSpent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);




    type Category = {
        id: number;
        name: string;
        totalBudget: number;
    };

    const [categories, setCategories] = useState<Category[]>([]);

    const addTransactionButton = (categoryId: number) => {
        setSelectedCategory(categoryId);
        setVisible(!visible);
    }

    const removeCategoryButton = (name: string) => {
        setCategories((prev) => prev.filter((c) => c.name !== name));
        removeCategory(name);
    }

    const enterButton = async () => {
        if (!selectedCategory) return;
        await addTransaction(selectedCategory, transactionName, Number(amountSpent));
        setCategories(prev =>
                prev.map(c =>
                    c.id === selectedCategory
                        ? { ...c, totalBudget: c.totalBudget - Number(amountSpent) }
                        : c
                )
            );
        setTransactionName('');
        setAmountSpent('');
        setVisible(false);
    }

    useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data || []); // Store fetched data into local variables
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    loadCategories();

    }, []);

    return(
        <View style = {styles.view}>

            <View style = {styles.container}>
                {categories.map((category, index) => (
                    <LinearGradient
                                colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
                                style = {styles.section}
                                key = {index}
                            >
                        <View style = {styles.categoryContainer}>
                            <Text style = {styles.categoryText}>{category.name}</Text>
                            <Text style = {styles.categoryText}>${category.totalBudget}</Text>
                        </View>
                        <View style = {{alignItems: 'center'}}>
                            <TouchableOpacity
                                style = {styles.button}
                                onPress = {() => addTransactionButton(category.id)}
                            >
                                <Text style = {styles.buttonText}>Add Transaction</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {styles.button}
                                onPress = {() => {removeCategoryButton(category.name)}}
                            >
                                <Text style = {styles.buttonText}>Remove Category</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                ))}
            </View>

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
                            placeholder='Transaction'
                            placeholderTextColor={'white'}
                            value = {transactionName}
                            onChangeText = {setTransactionName}
                        ></TextInput>
                        <TextInput
                            style = {styles.input}
                            placeholder='Amount Spent'
                            placeholderTextColor={'white'}
                            value = {amountSpent}
                            onChangeText = {setAmountSpent}
                            keyboardType="numeric"
                        ></TextInput>
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

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 15,
    },

    button: {
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: 10,
        width: 175,
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
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
        margin: 10,
        color: 'white'
    },

    modalContainer: {
        marginTop: screenHeight - 350,
        height: 250,
        backgroundColor: 'rgb(91, 73, 173)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    categoryText: {
        color: 'white',
        fontSize: 20,
    },

    categoryContainer: {
        flexDirection: 'row',
        width: screenWidth,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },

    container: {
        gap: 10,
        marginBottom: 20,
    },

    section: {
        borderRadius: 15,
        padding: 5,
        margin: 5,
    }
});