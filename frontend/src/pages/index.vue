<template>
  <v-main class="main-content">
    <v-img
      alt="Logo A+ Educação"
      class="image-education"
      src="https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg"
    />
    <NavigatorDrawer @change-view="currentView = $event">
      <StudentsList
        v-if="currentView === 'list'"
        class="view-container"
      />
    </NavigatorDrawer>

  </v-main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const currentView = ref('list')
</script>

<style lang="sass">
.main-content
  margin-top: 40px
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 0 100px


.image-education
  height: 95px
  width: 95px
  margin-left: 75px
  margin-bottom: 20px

.view-container
  margin-left: 300px
  width: 100%
</style>
