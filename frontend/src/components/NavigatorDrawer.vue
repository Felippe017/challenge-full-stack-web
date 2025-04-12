<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        location="left"
        permanent
      >
        <template #prepend>
          <v-list-item
            class="drawer-title"
            lines="two"
            title="Módulo acadêmico"
          />
        </template>


        <v-divider />

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Alunos" value="students" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 500px" />
    </v-layout>
  </v-card>
</template>


<style scoped lang="sass">
.drawer-title
  display: flex
  justify-content: center
  align-items: center
  text-align: center
</style>
