<script setup>
import { cardsStore } from "@/stores/cards";
import { ref } from "vue";

const name = ref('')
const description = ref('');

function addCard(card) {
  const cards = cardsStore();
  cards.addCard({ name: this.name, description: this.description, status: 'active' });

}

</script>

<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="4" lg="2">
      <v-card>
        <v-card-title>Добавить карточку</v-card-title>

        <v-form >
          <v-text-field
              v-model="name"
              label="Название"
          ></v-text-field>
          <v-textarea label="Описание"
          v-model="description">
          </v-textarea>
          <v-btn color=""
                 @click="addCard($)"
                 block class="mt-2">Создать
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
