<template>
  <HelloUser name="Ruben" />
  <ClickCounter />
  <ToDoList :tasks="['List 1', 'List 2']" />
  <NotifyButton @notificar="handleNotification" />
  <br /><br />
  <Tabs
    :tabs="[
      { name: 'Inicio', slot: 'inicio' },
      { name: 'Perfil', slot: 'perfil' },
      { name: 'Ajustes', slot: 'ajustes' },
    ]"
  >
    <template #inicio>
      <p>Contenido de inicio</p>
    </template>
    <template #perfil>
      <p>Contenido de perfil</p>
    </template>
    <template #ajustes>
      <p>Contenido de ajustes</p>
    </template>
  </Tabs>
  <Alert />
</template>

<script setup>
function handleNotification() {
  alert("El hijo ha notificado al padre");
}
</script>
