"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const simpleModel = new mongoose_1.default.Schema({
    userName: { type: String, required: [true, "Please provide a username"] },
    name: { type: String, required: [true, "Please provide a name"] },
    email: { type: String, required: [true, "Please provide an email"] },
    password: { type: String, required: [true, "Please provide a password"] },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("user", simpleModel);
