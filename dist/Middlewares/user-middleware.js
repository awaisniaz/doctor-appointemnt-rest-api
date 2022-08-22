"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_middleware = void 0;
exports.user_middleware = {
    validateUser: function (req, res, next) {
        console.log("I am Validate User");
        next();
    }
};
