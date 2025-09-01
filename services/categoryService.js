import { supabase } from "../lib/supabase";

export const fetchCategories = async() => {

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
        throw new Error("Failed to get current user.");
    }

    let { data: categories, error } = await supabase.from("categories").select("id, name, totalBudget").eq("user_id", user.id);

    if(error){
        throw new Error();
    }

    return categories;
}

export const addCategory = async(name, totalBudget) => {

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError){
        throw new Error();
    }

    let { data: categories, error } = await supabase.from("categories").insert(
        [
            {
                user_id: user.id,
                name: name,
                totalBudget: totalBudget
            }
        ]

    );

    if (error) {
        throw new Error();
    }
    return categories;
}

export const removeCategory = async (name) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError) {
        throw new Error("Failed to get current user.");
    }

    let { error } = await supabase
        .from("categories")
        .delete()
        .eq("user_id", user.id)
        .eq("name", name);

    if (error) {
        throw new Error("Failed to remove category.");
    }

    return true;
};