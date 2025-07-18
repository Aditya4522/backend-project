import mongoose from "mongoose";
import { DB_Name } from "../constants.js";


const connectDB = async ()=>{
    try {
      const connectionInstane =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
      console.log(`\n MongoDB connected !! DB HOST :${connectionInstane.connection.host}`);
      
    } catch (error) {
        console.log(" mongoDB connect error b", error);
        process.exit(1);
        
    }
}
export default  connectDB;