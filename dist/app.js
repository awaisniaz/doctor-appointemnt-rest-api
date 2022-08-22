"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./Database-connection/index");
var user_1 = __importDefault(require("./routes/user"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true }));
// Routing Section
app.use('/user', user_1.default);
// End Routing Section
app.listen(port, function () {
    console.log("Server started on port ".concat(port, " \u2714\u2764\u2764\u2764"));
});
