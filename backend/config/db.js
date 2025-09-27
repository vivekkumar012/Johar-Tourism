import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DataBase is Connected Successfully !!! ");
    } catch (error) {
        console.log("Error in DB Connection", error);
    }
}