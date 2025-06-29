import express from 'express';
import { customerQuery, findAllQueries } from "../../controller/customerQueryController.js"

const router = express.Router();

router.post('/createQuery', customerQuery);
router.get('/getQueries', findAllQueries);

export default router;