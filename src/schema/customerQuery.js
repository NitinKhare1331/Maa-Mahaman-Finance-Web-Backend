import mongoose from "mongoose";

const customerquerySchema = new mongoose.Schema({
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
    mobile: {
        type: Number,
        required: true,
        unique: true,
        minLength: 10,
        maxLength:10
    }
}, {timestamps: true});

const customerQuery = mongoose.model("Query", customerquerySchema);

export default customerQuery;