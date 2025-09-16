import { Dimensions, TouchableOpacity, Text, TextInput, View, StyleSheet, Modal } from 'react-native';
import { useEffect, useState } from 'react'
import { fetchCategories } from '../../services/categoryService'
import { LinearGradient } from 'expo-linear-gradient';


export default function OverviewBottomScreen(){

    const [visible, setVisible] = useState(false);
    const [budget, setBudget] = useState('');

    const handleTextChange = (text: string) => {
        setBudget(text)
    }

    const editBudgetButton = () => {
        setVisible(!visible);
        if(visible == false){
            setBudget('');
        }
    }

        type Category = {
            name: string;
            totalBudget: number;
        };

        const [categories, setCategories] = useState<Category[]>([]);

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
                {categories.map((category, index) => (
                    <View style = {styles.categoryContainer} key = {index}>
                            <Text style = {styles.categoryText}>{category.name}</Text>
                            <Text style = {styles.categoryText}>${category.totalBudget}</Text>
                        </View>
                ))}
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
                        <TextInput
                            placeholder='Goal'
                            placeholderTextColor={'white'}
                            value = {budget}
                            style = {styles.input}
                            onChangeText = {handleTextChange}
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

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
        marginTop: 30,
    },

    buttonText: {
        fontSize: 20,
    },

    modalContainer: {
        marginTop: screenHeight - 300,
        height: 200,
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
        height: 50,
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
});