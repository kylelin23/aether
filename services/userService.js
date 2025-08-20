import { supabase } from "../lib/supabase";

export const fetchUsers = async () => {
    // fetch users from user table
    let { data: users, error } = await supabase.from("users").select("*");

    if(error){
        throw new Error();
    }

    return users;
}

export const addUser = async (name, email, password, age, college, goals) => {
    // add user to users table
    let { data: users, error } = await supabase.from("users").insert(
        [
            {
                name: name,
                email: email,
                password: password,
                age: age,
                college: college,
                goals: goals
        }
    ]);

    if (error) {
        throw new Error();
    }

    return users;
}