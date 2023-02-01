"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
var HttpException_1 = __importDefault(require("./exceptions/HttpException"));
var Error_1 = require("./controller/Error");
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("tiny"));
// routes
app.use('/api/v1', routes_1.default);
app.all('*', function (req, res, next) {
    next(new HttpException_1.default("Can't find ".concat(req.originalUrl, " on this server!"), 404));
});
app.use(Error_1.globalError);
app.listen(PORT, function () { return console.log("Running on ".concat(PORT, " \u26A1")); });
exports.default = app;
