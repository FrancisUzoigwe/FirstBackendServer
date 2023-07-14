import express, { Application , Request, Response} from "express";
import dotenv from "dotenv"
dotenv.config()
import { mainApp } from "./mainApp";
import { Mongo } from "./config/database";

const app: Application = express();

const Port = parseInt(process.env.APPLICATION_PORT!);
const realPort =  Port



mainApp(app)
Mongo()

app.get("/", (req: Request, res: Response) => {
return res.status(200).json({
    message: "Api is ready for consumption"
})
})
const Server = app.listen(realPort, () => {
    console.log("Server is now live and listening on port", realPort)
})


process.on("uncaughtException", (err) => {
    console.log("uncaughtException", err)

    process.exit(1)
})

process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection", reason)

    Server.close(() => {
        process.exit(1)
    })
})
