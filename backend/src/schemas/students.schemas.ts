import { z } from 'zod';

export const createStudentsSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    registration: z.number({ required_error: 'Registration is required'}),
    cpf: z.string({ required_error: 'CPF is required' }),
  }),
});

export const updateStudentSchema = z.object({
  params: z.object({
    studentId: z.string({ required_error: 'Student ID is required' }),
  }),
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
  }),
});

export const studentParamsSchema = z.object({
  params: z.object({
    studentId: z.string({ required_error: 'Student ID is required' }),
  }),
});

export type CreateStudentsInput = z.infer<typeof createStudentsSchema.shape.body>;
export type UpdateStudentInput = z.infer<typeof updateStudentSchema>;
export type StudentParamsInput = z.infer<typeof studentParamsSchema.shape.params>;