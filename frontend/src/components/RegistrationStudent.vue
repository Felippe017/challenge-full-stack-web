<template>
  <v-main height="40rem">
    <h1 class="text-h4">Cadastro de aluno</h1>

    <form class="form-container">
      <v-text-field
        v-model="state.name"
        :error-messages="v$.name.$errors.map(e => e.$message as string)"
        label="Nome"
        required
        @blur="v$.name.$touch"
        @input="v$.name.$touch"
      />

      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map(e => e.$message as string)"
        label="E-mail"
        required
        @blur="v$.email.$touch"
        @input="v$.email.$touch"
      />

      <v-text-field
        v-model="state.registration"
        v-mask="['######']"
        :error-messages="v$.registration.$errors.map(e => e.$message as string)"
        label="RA"
        required
        @blur="v$.registration.$touch"
        @input="v$.registration.$touch"
      />

      <v-text-field
        v-model="state.cpf"
        v-mask="['###.###.###-##']"
        :error-messages="v$.cpf.$errors.map(e => e.$message as string)"
        label="CPF"
        required
        @blur="v$.cpf.$touch"
        @input="v$.cpf.$touch"
      />
      <div class="buttons-container">
        <v-btn
          class="text-none"
          color="grey-lighten-3"
          size="large"
          variant="flat"
          @click="clearCancel"
        >
          Cancelar
        </v-btn>
        <v-btn
          class="text-none mb-4"
          color="indigo-darken-3"
          :disabled="v$.$invalid || loading"
          :loading="loading"
          size="large"
          variant="flat"
          @click="submit"
        >
          Salvar
        </v-btn>
      </div>
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
    </form>
  </v-main>
</template>


<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, helpers, integer, minLength, required } from '@vuelidate/validators'
  import type { ResponseStudentCreated, StudentForm } from '@/types/student'
  import { createStudent } from '@/services/studentService'

  const loading = ref(false)
  const snackbar = ref(false)
  const snackbarMessage = ref('')
  const snackbarColor = ref('success')

  const initialState: StudentForm = {
    name: '',
    email: '',
    registration: '',
    cpf: '',
  }

  const state = reactive({
    ...initialState,
  })

  const rules = {
    name: {
      required: helpers.withMessage('Nome é obrigatório', required),
      minLength: helpers.withMessage('Nome deve ter mais do que 2 caracteres', minLength(3)),
    },
    email: {
      required: helpers.withMessage('E-mail é obrigatório', required),
      email: helpers.withMessage('E-mail inválido', email),
    },
    registration: {
      required: helpers.withMessage('Registro acadêmico é obrigatório', required),
      integer: helpers.withMessage('Registro acadêmico deve ser um número', integer),
      minLength: helpers.withMessage('Formato de registro acadêmico inválido', minLength(6)),
    },
    cpf: {
      required: helpers.withMessage('Cpf é obrigatório', required),
      minLength: helpers.withMessage('Cpf inválido', minLength(14)),
    },
  }

  const v$ = useVuelidate(rules, state)

  const emit = defineEmits<{
    (e: 'change-view', view: 'list' | 'form'): void
  }>()

  const clear = () => {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key as keyof typeof state] = value
    }
  }

  const clearCancel = () => {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key as keyof typeof state] = value
    }

    emit('change-view', 'list')
  }

  const submit = async () => {
    const isValid = await v$.value.$validate()

    if (!isValid) return

    loading.value = true

    try {
      const studentCreated: ResponseStudentCreated = await createStudent(state)
      snackbarMessage.value = studentCreated.message
      snackbar.value = true
      clear()
    } catch (error: any) {
      snackbarMessage.value =
        error?.response?.data?.message || 'Erro ao cadastrar aluno'
      snackbarColor.value = '#E53935'
      snackbar.value = true
    } finally {
      loading.value = false
    }
  }
</script>

<style lang="sass">
  .form-container
    display: flex
    flex-direction: column
    padding: 0 10rem
    gap: 2rem

  .buttons-container
    display: flex
    justify-content: flex-end
    gap: 2rem
</style>
