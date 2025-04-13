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
          @click="clear"
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
    </form>
  </v-main>
</template>


<script setup lang="ts">
  import { reactive, ref, watch } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, helpers, integer, minLength, required } from '@vuelidate/validators'
  import type { Student } from '@/types/student'

  const loading = ref(false)

  watch(loading, val => {
    if (!val) return
    setTimeout(() => (loading.value = false), 2000)
  })

  const initialState: Student = {
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

    emit('change-view', 'list')
  }

  const submit = async () => {
    const isValid = await v$.value.$validate()

    if (!isValid) return

    loading.value = true
    console.log('Dados enviados:', state)
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
