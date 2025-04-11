import { z } from 'zod';

export const createStudentsSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    registration: z.number({ required_error: 'Registration is required'}),
    cpf: z.string({ required_error: 'CPF is required' }),
  }),
});

export type CreateStudentsInput = z.infer<typeof createStudentsSchema.shape.body>;