//Refleja la estructura de datos de la base de datos.
import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    seat: {
        type: Number,
        required: true,
    },
    Bus_ID: {
        type: mongoose.Types.ObjectId,
        ref: "Bus",
        required: true,
    },
});
const busSchema = new mongoose.Schema({
    Total_Seat: {
        type: Number,
        required: true,
    },
    Empty_Seat: {
        type: Number,
        required: true,
    },
    Full_Seat: {
        type: Number,
        required: true,
    },
    Patent: {
        type: String,
        required: true,
    },
});
export const Customer = mongoose.model("Customer", customerSchema);
export const Bus = mongoose.model("Bus", busSchema);
