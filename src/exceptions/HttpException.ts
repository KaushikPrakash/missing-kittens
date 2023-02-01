class HttpException extends Error {
  status: string;
  message: string;
  statusCode: number;
  isOperational: boolean;
  constructor(message: string, statusCode: number) {
    super(message);

    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';;
    this.message = message;
    this.statusCode = statusCode
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor)
  }
}

export default HttpException;