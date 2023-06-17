import { Response } from 'express';

type IApiResponse<t> = {
  success: boolean;
  message?: string | null;
  statusCode: number;
  data: t | null;
};

const sendResponse = <t>(res: Response, data: IApiResponse<t>): void => {
  const responseData: IApiResponse<t> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
