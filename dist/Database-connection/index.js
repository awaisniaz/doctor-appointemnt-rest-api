"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/doctorappointement').then(function () { console.log("Database Connection Successfully ✔"); }).catch(function (err) { console.log("Have some issue ".concat(err, " \uD83E\uDDDC\u200D\u2642\uFE0F")); });
