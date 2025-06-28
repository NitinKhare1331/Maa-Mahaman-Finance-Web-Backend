import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 6,
        validate: {
            validator: function (emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: 'Invalid email format'
        },
    },
    role: {
        type: String,
        enum: ["admin", "employee", "user"],
        default: "user"
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
}, {timestamps: true});

userSchema.pre('save', function hashPassword(next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = hashedPassword;
    next();
});

const user = mongoose.model("User", userSchema);

export default user;