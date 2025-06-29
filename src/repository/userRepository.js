import User from "../schema/user.js";

export const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const findAllUsers = async (role) => {
    try {
        const users = await User.find({ role }, "username email role");
        return users;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const findAllEmployees = async (role) => {
    try {
        const users = await User.find({ role }, "username email role");
        return users;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteEmployeeById = async (id) => {
    try {
        const employee = await User.findOne({ _id: id, role: "employee" });

        if (!employee) {
            throw new Error("Employee not found");
        }

        const deleted = await User.findByIdAndDelete(id);
        return deleted;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const updateEmployeeById = async (id, updatedData) => {
    try {
        const employee = await User.findOne({ _id: id, role: "employee" });
        if (!employee) {
            throw new Error("Employee not found or not authorized to update");
        }

        const updatedEmployee = await User.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        });

        return updatedEmployee;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
