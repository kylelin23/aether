import { supabase } from "../lib/supabase";

export const addCategory = async(name, totalBudget) => {

    if (!name || name.trim() === "") {
        throw new Error("Category name cannot be empty.");
    }

    if (totalBudget === null || isNaN(totalBudget)) {
        throw new Error("Total budget must be a number.");
    }

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