<template>
  <div class="tabs">
    <div class="tab-buttons">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: selected === index }"
        @click="selected = index"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="tab-content">
      <slot :name="tabs[selected].slot"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  tabs: Array,
});
const selected = ref(0);
</script>

<style scoped>
.tab-buttons button.active {
  font-weight: bold;
  color: white;
  background-color: steelblue;
}
</style>
