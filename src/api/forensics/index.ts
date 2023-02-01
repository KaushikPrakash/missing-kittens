import axios, { AxiosError } from 'axios';
import HttpException from '../../exceptions/HttpException';
import { Coordinates } from "./../../types"

const BASE_URL = 'https://which-technical-exercise.herokuapp.com/api';

const fetchData = async (path: string, email: string) => {

  try {
    const { data } = await axios.get(`${BASE_URL}/${email}/${path}`);
    return data;
  }
  catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new HttpException(error.message, Number(error.code));
    } else {
      throw new HttpException('Internal Server Error', 500);
    }
  }
};

export const fetchDirections = (email: string) => {
  return fetchData('directions', email);
};

export const fetchLocation = (email: string, { x, y }: Coordinates) => {
  return fetchData(`location/${x}/${y}`, email);
};

