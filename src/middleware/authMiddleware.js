import { checkIfUserExists } from "../service/userService.js";
import { verifyJwt } from "../config/jwtConfig.js";

export const isAuthenticated = async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: 'Authorization header is missing'
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Token is malformed'
        });
    }

    try {
        const payload = verifyJwt(token);
        const doesUserExist = await checkIfUserExists(payload.email);

        if (!doesUserExist) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        req.user = payload;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
};
