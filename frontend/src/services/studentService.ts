import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
})

export const getStudents = async () => {
  const response = await api.get('/students')
  return response.data
}

export const createStudent = async (student: {
  name: string
  cpf: string
  registration: string
  email: string
}) => {
  const response = await api.post('/students', student)
  return response.data
}
