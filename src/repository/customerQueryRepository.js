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