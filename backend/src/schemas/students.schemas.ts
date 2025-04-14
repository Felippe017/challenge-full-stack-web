import { z } from 'zod';
import { checkCpfExist, checkRegistrationExist } from '../services/studentsService';

export const createStudentsSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Nome is required' })
      .min(3, 'Name must be at least 3 characters long'),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email format'),
    registration: z
      .number({ required_error: 'Registration is required'})
      .int('Registration must be an integer')
      .refine(val => val.toString().length === 6, {
        message: 'Registration must be exactly 6 digits',
      })
      .refine(async (val) => {
        await checkRegistrationExist(val)
      }, {
        message: 'Registration already exists',
      }),
    cpf: z
      .string({ required_error: 'CPF is required' })
      .min(11, 'CPF must be 11 characters')
      .refine(async (val) => {
        await checkCpfExist(val)
      }, {
        message: 'CPF already exists',
      }),

  }),
});

export const updateStudentSchema = z.object({
  params: z.object({
    studentId: z.string({ required_error: 'Student ID is required' }),
  }),
  body: z.object({
    name: z
      .string({ required_error: 'Nome is required' })
      .min(3, 'Name must be at least 3 characters long'),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email format'),
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