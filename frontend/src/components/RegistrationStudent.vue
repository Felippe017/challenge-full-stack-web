<template>
  <v-main height="40rem">
    <h1 class="text-h4">Cadastro de aluno</h1>

    <form class="form-container">
      <v-text-field
        label="Nome"
        required
      />

      <v-text-field
        label="E-mail"
        required
      />

      <v-text-field
        label="RA"
        required
      />

      <v-text-field
        label="CPF"
        required
      />
      <div class="buttons-container">
        <v-btn
          class="text-none"
          color="grey-lighten-3"
          size="large"
          variant="flat"
        >
          Cancelar
        </v-btn>
        <v-btn
          class="text-none mb-4"
          color="indigo-darken-3"
          :disabled="loading"
          :loading="loading"
          size="large"
          variant="flat"
          @click="loading = !loading"
        >
          Salvar
        </v-btn>
      </div>
    </form>
  </v-main>
</template>

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
