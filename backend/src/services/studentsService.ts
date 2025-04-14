import { prisma } from "../lib/prisma";
import {
	CreateStudentsInput,
	UpdateStudentInput,
	StudentParamsInput
} from "../schemas/students.schemas";


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

	const student = await prisma.students.findUnique({
		where: { id: Number(studentId) },
	})

	if (!student) {
		const error = new Error('Aluno não foi encontrado') as Error & { status: number }
		error.status = 404
		throw error
	}

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
	const student = await prisma.students.findUnique({
		where: { id: Number(studentId) },
	})

	if (!student) {
		const error = new Error('Aluno não foi encontrado') as Error & { status: number }
		error.status = 404
		throw error
	}

	const studentDeleted = await prisma.students.delete({
		where: { 
			registration: student?.registration,
			cpf: student?.cpf
		},
	})

	return studentDeleted
};

export const getStudentById = async ({ studentId }: StudentParamsInput) => {
	const student = await prisma.students.findUnique({
		where: { id: Number(studentId) },
	})

	if (!student) {
		const error = new Error('Aluno não foi encontrado') as Error & { status: number }
		error.status = 404
		throw error
	}

	return student
}