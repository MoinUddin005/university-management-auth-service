import { AcademicSemesterValidation } from './academicSemesterValidation';

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema), 
  academicSemesterController.createSemester
);

export const AcademicSemesterRoutes = router;
