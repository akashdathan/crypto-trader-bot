import 'reflect-metadata';
import express from 'express';
import cron from 'node-cron';
import path from 'path';
import { useExpressServer } from 'routing-controllers';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Cron } from './controller/cron-status';
import './util/dotenv-config';

const app = express(); // your created express server
// app.use() // you can configure it the way you want
useExpressServer(app, {
  // register created express server in routing-controllers
  controllers: [path.join(`${__dirname}/controller/*`)],
});

cron.schedule('* * * * *', () => {
  if (!Cron.isEnabled) return;

  console.log('running a task every minute');
});

app.listen(process.env.PORT);
console.log(`Server Listening At Port ${process.env.PORT}...`);
