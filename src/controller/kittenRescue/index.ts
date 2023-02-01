import { NextFunction, Request, Response } from 'express';
import HttpException from '../../exceptions/HttpException';
import { fetchDirections, fetchLocation } from "./../../api/forensics"
import { findCoordinates } from "./utils"

export const sendRescueTeam = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.params.email;

  if (!email) {
    return res.status(400).send({ error: 'Email is required' });
  }
  try {
    const flightPath = await fetchDirections(email);
    const coordinates = findCoordinates(flightPath);
    const searchLocation = await fetchLocation(email, coordinates)

    res.send(searchLocation.data);
  } catch (error: any) {
    next(new HttpException(error.message, error.code));
  }
};


