import express from 'express';
import { customerQuery } from "../../controller/customerQueryController.js"

const router = express.Router();

router.post('/createQuery', customerQuery);

export default router;