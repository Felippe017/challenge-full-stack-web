<template>
  <v-main>
    <h1 class="text-h4">Consulta de alunos</h1>

    <v-table
      fixed-header
      height="40rem"
    >
      <thead>
        <tr>
          <th class="text-left">
            Registro Acadêmico
          </th>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            CPF
          </th>
          <th class="text-left">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in allStudents"
          :key="item.registration"
        >
          <td>{{ item.registration }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.cpf }}</td>
          <td>
            <v-btn
              class="me-2"
              color="primary"
              size="x-small"
              variant="outlined"
              @click="editStudent(item)"
            >
              Editar
            </v-btn>
            <v-btn
              color="error"
              size="x-small"
              variant="outlined"
              @click="deleteStudent(item)"
            >
              Excluir
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-main>
</template>


<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { getStudents } from '@/services/studentService'
  import { Student } from '@/types/student'

  const allStudents = ref<Student[]>()

  onMounted(async () => {
    const students = await getStudents()
    allStudents.value = students
  })

  const editStudent = student => {
    console.log('Editar:', student)
  }

  const deleteStudent = student => {
    console.log('Excluir:', student)
  }

</script>


<style lang="sass">
  h1
    text-align: center
    padding-bottom: 30px
</style>
