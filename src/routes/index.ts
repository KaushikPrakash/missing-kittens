import express, { NextFunction, Request, Response } from 'express';
import { sendRescueTeam } from './../controller/kittenRescue';

const router = express.Router();

// router.get('/sendRescueTeam/:email', (req: Request, res: Response, next: NextFunction) => {
//   sendRescueTeam(req, res, next);
// });
router.get('/sendRescueTeam/:email', sendRescueTeam)

export default router;