export type Student = {
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
