"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('I am learning again');
});
// params 
app.get('/todo/:id', (req, res) => {
    res.send('I am learning again');
});
//query =??/ https://api/todo?title=prisma&body=hello
app.get('/todo', (req, res) => {
    res.send('I am learning again');
});
exports.default = app;
// handle routing, middleware, error handling of route 
