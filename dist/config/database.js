"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MongoString = process.env.APPLICATION_STRING;
const Mongo = () => {
    mongoose_1.default.connect(MongoString).then(() => {
        console.log("Database connsection established successfully");
    });
};
exports.Mongo = Mongo;
