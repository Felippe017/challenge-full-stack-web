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
        @change-view="currentView = $event"
      />
      <RegistrationStudent
        v-if="currentView === 'form'"
      />
    </NavigatorDrawer>

  </v-main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const currentView = ref<'list' | 'form'>('list')
</script>

<style lang="sass">
.main-content
  margin-top: 40px
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 0 6.25rem


.image-education
  height: 6rem
  width: 6rem
  margin-left: 4.7rem
  margin-bottom: 1.25rem

.v-main
  flex: none

.v-layout
  display: unset
</style>
