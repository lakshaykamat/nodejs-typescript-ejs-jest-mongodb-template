import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.render('index');
});

router.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

export default router;
