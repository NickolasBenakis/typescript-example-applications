"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("dotenv/config");
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use('/public', express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', index_1.default);
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
