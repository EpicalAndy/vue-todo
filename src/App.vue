<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppNavigate from "@/components/AppNavigate.vue";

</script>

<template>
  <v-layout>
    <AppNavigate></AppNavigate>
  </v-layout>

  <RouterView />
</template>

<style scoped>

</style>
