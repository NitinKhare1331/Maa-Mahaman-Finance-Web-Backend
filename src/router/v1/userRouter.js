import express from 'express';
import { isAuthenticated } from '../../middleware/authMiddleware.js';
import { signup, login, findAllUsers, findAllEmployees, updateEmployeeById, deleteEmployeeById, createEmployee } from '../../controller/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/getUsers', isAuthenticated, findAllUsers);
router.get('/getEmployees', isAuthenticated, findAllEmployees);
router.put('/updateEmployeeData/:id', isAuthenticated, updateEmployeeById);
router.delete('/deleteEmployeeData/:id', isAuthenticated, deleteEmployeeById);
router.post('/createEmployee', isAuthenticated, createEmployee);

export default router;