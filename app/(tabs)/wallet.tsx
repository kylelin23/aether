import { View, StyleSheet } from 'react-native';
import { fetchUsers } from '../../services/userService';
import { useEffect } from 'react';


export default function WalletScreen(){

    useEffect(()=> {
        const getAllUsers = async () => {
            const res = await fetchUsers();
            console.log("res", res)
        }
        getAllUsers()
    }, [])

    return(
        <View>

        </View>
    )
}

const styles = StyleSheet.create({

});