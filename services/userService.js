import { supabase } from "../lib/supabase";

export const fetchUsers = async () => {
    // SQL query from supabase
    let { data: users, error } = await supabase.from("users").select("*");

    if(error){
        throw new Error();
    }

    return users;
}