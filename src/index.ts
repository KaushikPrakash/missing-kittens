import express, { Express, NextFunction, Request, Response, } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from "morgan";

import router from './routes';
import HttpException from './exceptions/HttpException';
import { globalError } from "./controller/Error"
dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));

// routes
app.use('/api/v1', router);
app.all('*', (req, res, next) => {
  next(new HttpException(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalError);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
export default app;