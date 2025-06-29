import customerQuery from "../schema/customerQuery.js";
import CustomerQuery from "../schema/customerQuery.js"

export const createCustomerQuery = async (query) => {
    try {
        const newQuery = await CustomerQuery.create(query);
        return newQuery;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const findAllQueries = async () => {
    try {
        const queries = await CustomerQuery.find({}, "username email mobile");
        return queries;
    } catch (error) {
        console.log(error);
        throw error;
    }
}