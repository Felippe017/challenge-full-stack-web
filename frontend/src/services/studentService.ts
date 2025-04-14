import type { StudentForm } from '@/types/student'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
})

export const getStudents = async () => {
  const response = await api.get('/students')
  return response.data
}

export const createStudent = async (student: StudentForm) => {
  const bodyRequest = {
    name: student.name,
    cpf: student.cpf.replace(/\D/g, ''),
    registration: Number(student.registration),
    email: student.email,
  }
  const response = await api.post('/students', bodyRequest)
  return response.data
}

export const removeStudent = async (studentId: number) => {
  const response = await api.delete(`/students/${studentId}`)
  return response.data
}
