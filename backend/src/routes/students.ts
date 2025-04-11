import { Router } from 'express';
import {
  createStudentsSchema,
  updateStudentSchema,
  studentParamsSchema
} from '../schemas/students.schemas'
import {
  createStudentHandler,
  getStudentHandler,
  updateStudentHandler,
  deleteStudentHandler,
  getStudentByIdHandler
} from '../controllers/studentsController'

import { validate } from '../middleware/validate';

const router = Router();

router.get('/', getStudentHandler);
router.get('/:studentId', validate(studentParamsSchema), getStudentByIdHandler);
router.post('/', validate(createStudentsSchema), createStudentHandler);
router.patch('/:studentId', validate(updateStudentSchema), updateStudentHandler);
router.delete('/:studentId', validate(studentParamsSchema), deleteStudentHandler);

export default router;