import { supabase } from "../lib/supabase";

export const fetchTransactions = async () => {
    let { data: transactions, error } = await supabase.from("transactions").select("id, name, amountSpent");

    if(error){
        throw new Error();
    }

    return transactions;
}

export const addTransaction = async (category_id, name, amountSpent) => {
    let { data: transactions, error } = await supabase.from("transactions").insert(
        [
            {
                category_id: category_id,
                name: name,
                amountSpent: amountSpent
        }
    ]);

    if (error) {
        throw new Error();
    }

    return transactions;
}