import 'reflect-metadata';
require('dotenv').config()
import express from 'express';
import routes from './routes/routes';
import './database/connect';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(routes);

app.listen(3000, () => console.log(`Server started at http://localhost:${process.env.PORT}`));

module.exports = app;