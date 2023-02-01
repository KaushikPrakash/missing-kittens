import { NextFunction, Request, Response } from 'express';
import HttpException from '../../exceptions/HttpException';
import { fetchDirections, fetchLocation } from "./../../api/forensics"
import { isValidEmail, findCoordinates } from "./utils"

export const sendRescueTeam = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.params.email;

  try {
    if (!isValidEmail(email)) {
      const error: any = new Error('Enter valid email');
      error.code = 400;
      throw error;
    }
    const flightPath = await fetchDirections(email);
    const coordinates = findCoordinates(flightPath);
    const searchLocation = await fetchLocation(email, coordinates)
    return res.json(searchLocation);
  } catch (error: any) {
    next(new HttpException(error.message, error.code));
  }
};


