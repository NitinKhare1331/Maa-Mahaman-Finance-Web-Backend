import { signupUserService, loginUserService } from "../service/userService.js";

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