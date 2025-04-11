import { prisma } from "../lib/prisma";
import { CreateStudentsInput } from "../schemas/students.schemas";


export const createStudent = async ({ name, email, registration, cpf }: CreateStudentsInput) => {
    const student = await prisma.students.create({
        data: {
            name, email, registration, cpf
        }
    })
    return student
};


export const getStudents = async () => {
    const student = await prisma.students.findMany()
    return student
};
