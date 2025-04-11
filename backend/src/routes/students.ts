import { Router } from 'express';
import { createStudentsSchema, updateStudentSchema } from '../schemas/students.schemas'
import {
  createStudentHandler,
  getStudentHandler,
  updateStudentHandler
} from '../controllers/studentsController'

import { validate } from '../middleware/validate';

const router = Router();

router.get('/', getStudentHandler);
router.post('/', validate(createStudentsSchema), createStudentHandler);
router.patch('/:studentId', validate(updateStudentSchema), updateStudentHandler);

export default router;