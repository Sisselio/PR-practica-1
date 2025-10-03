<template>
  <input type="text" v-model="txtAlert" />
  <button @click="showAlert">Crear alerta</button>
</template>
<script setup>
const txtAlert = ref("");
function showAlert() {
  alert(txtAlert.value);
}
</script>
