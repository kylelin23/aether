import { supabase } from "../lib/supabase";

export const addCategory = async(name) => {

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError){
        throw new Error();
    }

    let { data: categories, error } = await supabase.from("categories").insert(
        [
            {
                name: name,
                user_id: user.id
            }
        ]

    );

    if (error) {
        throw new Error();
    }
    return categories;
}