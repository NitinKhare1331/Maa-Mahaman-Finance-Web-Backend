import { createCustomerQuery, findAllQueries } from "../repository/customerQueryRepository.js"

export const createCustomerQueryService = async (query) => {
    try {
        const newQuery = await createCustomerQuery(query);
        return newQuery;
    } catch (error) {
        console.log("createCustomerQueryService error");
        throw error;
    }
}

export const findAllQueriesService = async () => {
    try {
        const query = await findAllQueries();
        return query;
    } catch (error) {
        console.log("findAllQueriesService error");
        throw error;
    }
}