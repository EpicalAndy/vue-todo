<script setup>
const { card } = defineProps({ card: Object });

</script>

<template>
  <v-layout>
    <v-card variant="tonal" v-if="card">
      <v-card-title>{{ card.name }}</v-card-title>
      <v-card-text>{{ card.description }}</v-card-text>
    </v-card>
  </v-layout>
</template>

<style scoped>

</style>
