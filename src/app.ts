import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
require('dotenv').config();

const app = express();

import apiRouter from './api/v1/api'

app.use(helmet());

const allowedOrigin = ['http://localhost:3000']

var corsOptions = {
    origin: function (origin:any, callback:any) {
        if (allowedOrigin.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(null, false)
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    preflightcontinue: true
}

app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", apiRouter);

// app.use(notFound);

export default app;