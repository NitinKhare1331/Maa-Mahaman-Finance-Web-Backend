import express from 'express';
import { signup, login, findAllUsers, findAllEmployees, updateEmployeeById, deleteEmployeeById, createEmployee } from '../../controller/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/getUsers', findAllUsers);
router.get('/getEmployees', findAllEmployees);
router.put('/updateEmployeeData/:id', updateEmployeeById);
router.delete('/deleteEmployeeData/:id', deleteEmployeeById);
router.post('/createEmployee', createEmployee);

export default router;