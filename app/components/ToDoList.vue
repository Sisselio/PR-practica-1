<template>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
</template>

<script setup>
defineProps({
  tasks: Array,
});
</script>
