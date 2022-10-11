<script setup lang="ts">
import VHeader from "@/components/header/v-header.vue";
import VFooter from "@/components/footer/v-footer.vue";
import('./assets/home.css');
</script>

<template>
  <v-header></v-header>
  <RouterView />
  <v-footer></v-footer>
</template>

