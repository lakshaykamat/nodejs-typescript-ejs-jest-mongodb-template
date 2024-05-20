import express from 'express';
import greetRouter from './greet.js';

const router = express.Router();

router.use('/', greetRouter);

export default router;
