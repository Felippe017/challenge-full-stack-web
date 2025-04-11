import { prisma } from "../lib/prisma";
import { CreateStudentsInput, UpdateStudentInput, StudentParamsInput } from "../schemas/students.schemas";


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

export const updateStudent = async ({body, params}: UpdateStudentInput) => {
	const { name, email } = body
	const { studentId } = params

	const student = await prisma.students.findFirst({
		where: { id: Number(studentId) },
	})

	const updatedStudent = await prisma.students.update({
		where: { 
			registration: student?.registration,
			cpf: student?.cpf
		},
		data: { name, email }
	})

	return updatedStudent
};

export const deleteStudent = async ({ studentId }: StudentParamsInput) => {
	const student = await prisma.students.findFirst({
		where: { id: Number(studentId) },
	})

	const studentDeleted = await prisma.students.delete({
		where: { 
			registration: student?.registration,
			cpf: student?.cpf
		},
	})

	return studentDeleted
};