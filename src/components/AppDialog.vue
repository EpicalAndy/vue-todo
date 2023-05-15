<script setup>
import { VCard } from "vuetify/components";

defineProps({ content: VCard, callBack: Function });
</script>

<template>
  <v-dialog>
    <slot> {{ content }}</slot>
  </v-dialog>
</template>

<style scoped>

</style>
