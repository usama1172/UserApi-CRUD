import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const url = process.env.DB_URL

const connectDb = ()=>{
    try {
        mongoose.connect(url)
        console.log('MongoDB connected...');
        
    } catch (error) {
        console.error('Error connecting', error);
        process.exit(1);
    }
}
export default connectDb