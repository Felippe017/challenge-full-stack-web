<template>
  <v-main height="40rem">
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
              @click="dialog = true"
            >
              Excluir
            </v-btn>
            <div class="text-center pa-4">
              <v-dialog
                v-model="dialog"
                max-width="400"
                persistent
              >
                <v-card
                  prepend-icon="mdi-information"
                  text="Tem certeza que deseja excluir esse aluno?"
                  title="Deseja excluir esse aluno?"
                >
                  <template #actions>
                    <v-spacer />

                    <v-btn @click="dialog = false">
                      Cancelar
                    </v-btn>

                    <v-btn
                      :loading="loading"
                      @click="deleteStudent(item.id)"
                    >
                      Excluir
                    </v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
          </td>
        </tr>
      </tbody>
      <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        location="top center"
        multi-line
      >
        {{ snackbarMessage }}

        <template #actions>
          <v-btn
            color="white"
            variant="text"
            @click="snackbar = false"
          >
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
    </v-table>
  </v-main>
</template>


<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { getStudents, removeStudent } from '@/services/studentService'
  import type { Student } from '@/types/student'
  import { useRouter } from 'vue-router'

  const allStudents = ref<Student[]>()
  const dialog = ref(false)
  const loading = ref(false)
  const snackbar = ref(false)
  const snackbarMessage = ref('')
  const snackbarColor = ref('success')
  const router = useRouter()

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

  const deleteStudent = async (studentId: number) => {
    loading.value = true
    try {
      await removeStudent(studentId)
      snackbarMessage.value = 'Aluno excluído com sucesso'
      snackbar.value = true
      router.go(0)
    } catch (error: any) {
      snackbarMessage.value =
        error?.response?.data?.message || 'Não foi possível excluir aluno'
      snackbarColor.value = '#E53935'
      snackbar.value = true
    } finally {
      dialog.value = false
    }
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
