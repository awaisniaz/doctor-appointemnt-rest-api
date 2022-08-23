"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var Storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images/profilephotos");
    },
    filename: function (req, file, callback) {
        console.log(file.fieldname + "_" + Date.now() + "_" + file.originalname);
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = (0, multer_1.default)({
    storage: Storage
});
exports.default = upload;
