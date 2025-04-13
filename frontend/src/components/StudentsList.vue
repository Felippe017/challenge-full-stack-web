<template>
  <v-main height="45rem">
    <h1 class="text-h4">Consulta de alunos</h1>
    <div class="button-and-input">
      <v-text-field
        density="compact"
        label="Digite sua busca"
        style="max-width: 60%;"
        variant="solo-filled"
      />
      <v-btn class="search-button" size="large" variant="tonal">Pesquisar</v-btn>
      <v-btn size="large" variant="tonal" @click="emit('change-view', 'form')">Cadastrar Aluno</v-btn>
    </div>

    <v-table
      fixed-header
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
  import type { Student } from '@/types/student'

  const allStudents = ref<Student[]>()

  const emit = defineEmits<{
    (e: 'change-view', view: 'list' | 'form'): void
  }>()

  onMounted(async () => {
    const students = await getStudents()
    allStudents.value = students
  })

  const editStudent = (student: Student) => {
    console.log('Editar:', student)
  }

  const deleteStudent = (student: Student) => {
    console.log('Excluir:', student)
  }

</script>


<style lang="sass">
  h1
    text-align: center
    padding-bottom: 1.8rem

  .button-and-input
    display: flex
    padding: 0 3rem

  .search-button
    margin-right: 5rem
</style>
