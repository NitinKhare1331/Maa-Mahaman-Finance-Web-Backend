import { signupUserService, loginUserService, findAllUsersService, findAllEmployeesService, updateEmployeeByIdService, deleteEmployeeByIdService } from "../service/userService.js";

export async function signup(req, res) {
    try {
        const user = await signupUserService(req.body);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
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

export async function login(req, res) {
    try {
        const user = await loginUserService(req.body);

        res.setHeader('authorization', user);

        return res.status(200).json({
            success: true,
            message: "User logged in Successfully",
            data: user
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

export async function findAllUsers(req, res) {
    try {
        const users = await findAllUsersService("user");
        res.status(200).json(users);
    } catch (error) {
        console.error("findAllUser Controller Error", error);
        throw error;
    }
}

export async function findAllEmployees(req, res) {
    try {
        const users = await findAllEmployeesService("employee");
        res.status(200).json(users);
    } catch (error) {
        console.error("findAllUser Controller Error", error);
        throw error;
    }
}

export async function updateEmployeeById(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedEmployee = await updateEmployeeByIdService(id, updatedData);
        res.status(200).json({
            success:true,
            message: "Employee data updated successfully",
            data: updatedEmployee
        });
    } catch (error) {
        console.error("updateEmployeeById Controller Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteEmployeeById(req, res) {
    try {
        const { id } = req.params;
        const deletedUser = await deleteEmployeeByIdService(id);
        res.status(200).json({
            success: true,
            message: "user deleted successfully",
            data: deletedUser
        });
    } catch (error) {
        console.error("deleteEmployeeById Controller Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



