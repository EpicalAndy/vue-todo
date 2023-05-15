<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppNavigate from "@/components/AppNavigate.vue";

</script>

<template>
  <v-layout>
    <AppNavigate></AppNavigate>
  </v-layout>

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>

</style>
