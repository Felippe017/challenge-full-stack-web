import { Router } from 'express';
import { createStudentsSchema } from '../schemas/students.schemas'
import { createStudentHandler } from '../controllers/studentsController'

import { validate } from '../middleware/validate';

const router = Router();

router.post('/', validate(createStudentsSchema), createStudentHandler);

export default router;