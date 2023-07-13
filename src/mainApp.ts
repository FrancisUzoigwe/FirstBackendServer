import express, { Application } from "express"
import cors from "cors"
import simple from "./routes/simpleRoute"


export const mainApp = (app: Application) => {
    app
    .use(express.json())
    .use(cors())
    .use("/api/v1/", simple)
}