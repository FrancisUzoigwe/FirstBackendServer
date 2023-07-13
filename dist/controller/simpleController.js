"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = exports.create = exports.view = void 0;
const simpleModel_1 = __importDefault(require("../model/simpleModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const view = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const view = yield simpleModel_1.default.find();
        return res.status(200).json({
            message: "Viewing all",
            data: view,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occured",
        });
    }
});
exports.view = view;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, userName, name } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield simpleModel_1.default.create({
            email,
            password: hash,
            userName,
            name,
        });
        return res.status(201).json({
            message: "User created successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Unable to create user",
        });
    }
});
exports.create = create;
const deleteuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield simpleModel_1.default.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: "User deleted successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Unable to delete user",
        });
    }
});
exports.deleteuser = deleteuser;
