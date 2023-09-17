// src/exampleRoute.ts

import { Router, Request, Response } from 'express';

const router = Router();

// Define a route handler for the '/example' endpoint
router.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default router;
