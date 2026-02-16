<script setup lang="ts">
import MenuItem from './MenuItem.vue'
</script>

<template>
  <nav class="flex flex-col">
    <menu-item to="/" label="Início" />
    <menu-item to="/counter" label="Contador #1" />
    <menu-item to="/counter/pinia" label="Contador #2" />
  </nav>
</template>

<style scoped></style>
