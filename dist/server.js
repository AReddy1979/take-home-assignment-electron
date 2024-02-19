"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const app = (0, express_1.default)();
// Define a route for the GET request
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// Start the server
app.listen(constants_1.SERVER_URL, () => {
    console.log(`Server is running on ${constants_1.SERVER_URL}`);
});
//# sourceMappingURL=server.js.map