<template>
  <button @click="emit('notificar')">Notificar al padre</button>
</template>

<script setup>
const emit = defineEmits(["notificar"]);
</script>
