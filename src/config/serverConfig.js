import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.MONGO_DB_URL;

export const JWT_SECRET = process.env.JWT_SECRET;