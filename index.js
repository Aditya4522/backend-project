import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./db/index.js";


connectDB()








/* 
import { DB_Name } from "./constants";
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on the port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
 */