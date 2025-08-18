import { supabase } from "../lib/supabase";

export const fetchUsers = async () => {
    // fetch users from user table
    let { data: users, error } = await supabase.from("users").select("*");

    if(error){
        throw new Error();
    }

    return users;
}

export const addUser = async () => {
    // add user to users table
    let { data: users, error } = await supabase.from("users").insert(
        [
            {
                name: 'Zoro',
                username: 'zoro123',
                password: 'mihawk'
        }
    ]);

    if (error) {
        throw new Error();
    }

    return users;
}