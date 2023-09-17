// src/exampleRoute.ts

import { Router, Request, Response } from 'express';

const router = Router();

// Define a route handler for the '/example' endpoint
router.get('/example', (req: Request, res: Response) => {
  res.send('This is the example route.');
});

export default router;
