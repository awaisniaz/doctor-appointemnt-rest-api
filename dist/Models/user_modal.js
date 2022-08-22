"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var user_schema = new mongoose_1.default.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: String,
    photo: String,
    country: String,
    user_type: String,
    phone_no: String
});
var user_modal = mongoose_1.default === null || mongoose_1.default === void 0 ? void 0 : mongoose_1.default.model('Users', user_schema);
exports.default = user_modal;
