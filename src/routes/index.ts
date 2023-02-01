import express, { NextFunction, Request, Response } from 'express';
import { sendRescueTeam } from './../controller/kittenRescue';

const router = express.Router();

router.get('/sendRescueTeam/:email', async (req: Request, res: Response, next: NextFunction) => {
  await sendRescueTeam(req, res, next);
});


export default router;