import express from 'express';
import { customerQuery, findAllQueries } from "../../controller/customerQueryController.js"
import { isAuthenticated } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.post('/createQuery', customerQuery);
router.get('/getQueries',isAuthenticated, findAllQueries);

export default router;