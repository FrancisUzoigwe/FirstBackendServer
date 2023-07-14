import mongoose from "mongoose";

const MongoString: string = process.env.APPLICATION_STRING! 
export const Mongo = () => {
    mongoose.connect(MongoString).then(() => {
        console.log("Database connection established successfully");
    })
}