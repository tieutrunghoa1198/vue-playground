<script setup lang="ts">
const a = 'asd';
</script>
<template>
  <div
      class="container-fluid"
  >
    <nav class="d-flex">
      <div class="mx-2">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="mx-2">
        <RouterLink to="/list">About</RouterLink>
      </div>
    </nav>
  </div>
</template>
