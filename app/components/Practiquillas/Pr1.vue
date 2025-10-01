<script setup lang="ts">
defineProps<{
  message: string;
  image: string;
  test: string;
}>();

defineEmits(["test"]);
</script>

<template>
  <div>
    <img :src="image" />
    <button @click="$emit('test')">{{ message }}</button>
    {{ test }}
  </div>
</template>
