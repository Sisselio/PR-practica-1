<template>
  <div id="ej1">
    <h1>Ejercicio 1</h1>
    <p v-if="isVisible">{{ mensaje }}</p>
    <template>
      <button @click="() => (isVisible = false)">Ocultar</button>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
const mensaje = ref("Ejercicio 1");
const isVisible = ref(true);
</script>
