<template>
  <p>Hola, {{ name }}!</p>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
