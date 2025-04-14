export type Student = {
  id: number
  name: string
  cpf: string
  registration: string
  email: string
}

export type StudentForm = {
  name: string
  cpf: string
  registration: string
  email: string
}

type ResponseStudent = {
  id: number
  name: string
  cpf: string
  registration: number
  email: string
}

export type ResponseStudentCreated = {
  message: string
  student: ResponseStudent
}

export type StudentUpdateBody = {
  name: string
  email: string
}
