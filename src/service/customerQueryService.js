import { createCustomerQuery } from "../repository/customerQueryRepository.js"

export const createCustomerQueryService = async (query) => {
    try {
        const newQuery = await createCustomerQuery(query);
        return newQuery;
    } catch (error) {
        console.log("createCustomerQueryService error");
        throw error;
    }
}