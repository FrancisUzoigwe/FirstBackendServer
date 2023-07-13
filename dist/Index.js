"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mainApp_1 = require("./mainApp");
const database_1 = require("./config/database");
const app = (0, express_1.default)();
const Port = parseInt(process.env.APPLICATION_PORT);
const realPort = Port;
(0, mainApp_1.mainApp)(app);
(0, database_1.Mongo)();
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Api is ready for consumption"
    });
});
const Server = app.listen(realPort, () => {
    console.log("Server is now live and listening on port", realPort);
});
process.on("uncaughtException", (err) => {
    console.log("uncaughtException", err);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection", reason);
    Server.close(() => {
        process.exit(1);
    });
});
