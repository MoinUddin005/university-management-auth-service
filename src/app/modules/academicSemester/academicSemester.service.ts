import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemesterModel';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  //summer 02 !=== 3
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  const result = await academicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
