import { Request, Response } from 'express';
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudentById
} from '../services/studentsService';
import {
  CreateStudentsInput,
  UpdateStudentInput,
  StudentParamsInput
} from '../schemas/students.schemas';

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

export async function getStudentHandler(_req: Request, res: Response) {
  const students = await getStudents();
  res.status(200).json(students);
}

export async function updateStudentHandler(
  req: Request<UpdateStudentInput['params'], {}, UpdateStudentInput['body']>,
  res: Response
) {
  try {
    const { name, email } = req.body;
    const { studentId } = req.params;
    const student = await updateStudent({
      body: { email, name },
      params: { studentId }
  });
    res.status(200).json({ "message": "Aluno editado com sucesso.", student });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).send(error.message);
    }
  }
}

export async function deleteStudentHandler(
  req: Request<StudentParamsInput>,
  res: Response
) {
  try {
    const { studentId } = req.params
    await deleteStudent({ studentId });
    res.status(204).json({ "message": "Aluno deletado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).send(error.message);
    }
    
  }
}

export async function getStudentByIdHandler(
  req: Request<StudentParamsInput>,
  res: Response
) {
  try {
    const { studentId } = req.params
    const student = await getStudentById({ studentId });
    res.status(200).json({"message": "Dados do aluno recuperados com sucesso.", student});
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).send(error.message);
    }
  }
}
