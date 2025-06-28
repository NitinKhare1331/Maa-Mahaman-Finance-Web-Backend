import express from "express";
import UserRouter from "./userRouter.js";
import QueryRouter from "./queryRouter.js";

const router = express.Router();

router.use('/users', UserRouter);
router.use('/query', QueryRouter);

export default router;