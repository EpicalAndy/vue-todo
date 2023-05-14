<script setup>
import { VBottomNavigation } from "vuetify/components";


</script>

<template>
  <v-app-bar :elevation="2">
    <v-btn to="/">
      <span>Все карточки</span>
    </v-btn>

    <v-btn to="completed">
      <span>Активные карточки</span>
    </v-btn>

    <v-btn to="cancaled">
      <span>Закрытые карточки</span>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>
