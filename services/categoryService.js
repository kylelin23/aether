import { supabase } from "../lib/supabase";

export const addCategory = async(name) => {
    let { data: categories, error } = await supabase.from("categories").insert(
        [
            {
                name: name
            }
        ]

    );

    if (error) {
        throw new Error();
    }
    return categories;
}