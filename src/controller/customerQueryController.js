import { createCustomerQueryService, findAllQueriesService } from "../service/customerQueryService.js";

export async function customerQuery(req, res) {
    try {
        const query = await createCustomerQueryService(req.body);

        return res.status(201).json({
            success: true,
            message: "Query created successfully",
            data: query
        })
    } catch (error) {
        console.log(error);

        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export async function findAllQueries(req, res) {
    try {
        const query = await findAllQueriesService();
        res.status(200).json(query);
    } catch (error) {
        console.error("findAllQueriesController Error", error);
        throw error;
    }
}