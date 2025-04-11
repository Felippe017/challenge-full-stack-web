import { Request, Response } from 'express';
import { createStudent } from '../services/studentsService';
import { CreateStudentsInput } from '../schemas/students.schemas';

export async function createStudentHandler(
  req: Request<{}, {}, CreateStudentsInput>,
  res: Response
) {
  try {
    const { name, email, registration, cpf } = req.body;
    const student = await createStudent({ name, email, registration, cpf });
    res.status(201).json({ "message": "Aluno criado com sucesso.", student });
  } catch (e: any) {
    console.error(e.message);
    res.status(400).send(e.message);
  }
}
