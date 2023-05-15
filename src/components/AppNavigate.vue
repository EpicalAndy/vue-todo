<script setup>
import { ref } from "vue";
import AppDialog from "@/components/AppDialog.vue";
import EditCard from  "@/components/EditCard.vue"

const newCard = ref(false)

</script>

<template>
  <v-app-bar>
    <v-btn-group>
      <v-btn to="/">
      <span>Все карточки</span>
    </v-btn>

    <v-btn to="completed">
      <span>Активные карточки</span>
    </v-btn>

    <v-btn to="cancaled">
      <span>Закрытые карточки</span>
    </v-btn>
    </v-btn-group>

    <v-btn-group>
      <v-btn icon="mdi-plus" @click="newCard = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-btn-group>

    <app-dialog v-model="newCard">
      <edit-card></edit-card>
    </app-dialog>

  </v-app-bar>
</template>

<style scoped>

</style>
