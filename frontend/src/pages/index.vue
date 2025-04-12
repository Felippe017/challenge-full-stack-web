<template>
  <v-main class="main-content">
    <v-img
      alt="Logo Mais A Educação"
      class="image-education"
      src="https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg"
    />
    <NavigatorDrawer />
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>

<style lang="sass">
.main-content
  margin-top: 40px
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 50px

.image-education
  height: 95px
  width: 95px
  margin-left: 75px
  margin-bottom: 20px
</style>
