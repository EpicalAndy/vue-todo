<script setup>
import ViewCard from "@/components/ViewCard.vue";
import { cardsStore } from "@/stores/cards";

const { cards } = cardsStore();

</script>

<template>
  <view-card v-for="card in cards" :key="card.id" :card="card"></view-card>
</template>


<style scoped>

</style>
