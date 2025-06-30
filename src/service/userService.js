import { generateJwtToken } from "../config/jwtConfig.js";
import { createUser, findUserByEmail, findAllUsers, findAllEmployees, updateEmployeeById, deleteEmployeeById } from "../repository/userRepository.js";
import bcrypt from "bcrypt";

export const signupUserService = async (user) => {
    try {
        let role = "user";

        if(user.email.endsWith('@employee.com')){
            role = "employee";
        }

        const newUser = await createUser({ ...user, role });

        return newUser;
    } catch (error) {
        if(error.name === "MongoServerError" && error.code === 11000) {
            throw {
                status: 400,
                message: "User with the same email or username already exists"
            }
        }
        console.log("signinUserService error");
        throw error;
    }
}

export const loginUserService = async (userDetails) => {
    try {
        const user = await findUserByEmail(userDetails.email);
        if(!user) {
            throw{
                status: 404,
                message: 'User not found'
            }
        }

        const isPasswordValid = bcrypt.compareSync(userDetails.password, user.password);

        if(!isPasswordValid) {
            throw{
                status: 401,
                message: 'Invalid password'
            }
        }

        const token = generateJwtToken({email: user.email, _id: user.id, username:user.username, role: user.role || "user"});
        return {
            token,
            email: user.email,
            role: user.role || "user"
        };
    } catch (error) {
        console.log("loginUserService error");
        throw error;
    }
}

export const checkIfUserExists = async (email) => {
    try {
        const user = await findUserByEmail(email);
        return user;
    } catch (error) {
        throw error;
    }
}

export const findAllUsersService = async (role) => {
    try {
        const user = await findAllUsers(role);
        return user;
    } catch (error) {
        console.log("findAllUserService error");
        throw error;
    }
}

export const findAllEmployeesService = async (role) => {
    try {
        const user = await findAllEmployees(role);
        return user;
    } catch (error) {
        console.log("findAllUserService error");
        throw error;
    }
}

export const updateEmployeeByIdService = async (id, updatedData) => {
    try {
        const updated = await updateEmployeeById(id, updatedData);
        return updated;
    } catch (error) {
        console.log("updateEmployeeByIdService error", error);
        throw error;
    }
};

export const deleteEmployeeByIdService = async (id) => {
    try {
        const deleted = await deleteEmployeeById(id);
        return deleted;
    } catch (error) {
        console.log("deleteEmployeeByIdService error", error);
        throw error;
    }
};


export const createEmployeeService = async (employee) => {
    try {
        let role = "employee";

        if(employee.email.endsWith('@employee.com')){
            role = "employee";
        }

        const newEmployee = await createUser({ ...employee, role });

        return newEmployee;
    } catch (error) {
        if(error.name === "MongoServerError" && error.code === 11000) {
            throw {
                status: 400,
                message: "User with the same email or username already exists"
            }
        }
        console.log("createEmployeeService error");
        throw error;
    }
}
