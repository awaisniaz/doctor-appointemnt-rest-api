"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Users_Controllers_1 = require("../Controllers/Users-Controllers");
var user_middleware_1 = require("../Middlewares/user-middleware");
var user_router = express_1.default.Router();
// user_router.use(user_middleware?.validateUser)
user_router.get('/login', [user_middleware_1.user_middleware === null || user_middleware_1.user_middleware === void 0 ? void 0 : user_middleware_1.user_middleware.validateUser], Users_Controllers_1.userController === null || Users_Controllers_1.userController === void 0 ? void 0 : Users_Controllers_1.userController.login);
user_router.post('/register/', Users_Controllers_1.userController === null || Users_Controllers_1.userController === void 0 ? void 0 : Users_Controllers_1.userController.register);
exports.default = user_router;
