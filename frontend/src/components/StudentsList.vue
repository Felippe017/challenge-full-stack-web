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
          v-for="item in desserts"
          :key="item.registration"
        >
          <td>{{ item.registration }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.cpf }}</td>
          <td>{{ item.actions }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-main>
</template>


<script lang="ts" setup>
  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
  ]
</script>


<style lang="sass">
    h1
        text-align: center
        padding-bottom: 30px
</style>
