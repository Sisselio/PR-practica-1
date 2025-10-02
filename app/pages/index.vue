import { PractiquillasPr1 } from '../../.nuxt/components';
<script setup>
const myUrl = "my-url";
const doSomething = () => {
  alert("algo");
};

const myData = [
  {
    image:
      "https://medios.alebateducation.com/media/2025/9/foto_slide_52_fe1e5e9474.jpg",
    message: "Imagen 1",
    test: "fjhs",
  },
  {
    image:
      "https://medios.alebateducation.com/media/2025/9/SLIDE_Bootcamp_Gestion_De_Clinicas_771aa76401.jpg",
    message: "Imagen 2",
    test: "fjhs",
  },
];
</script>

<template>
  <h1 @click.prevent="">Introduccion a Vue</h1>
  <ul>
    <li>
      <h2>¿Que es Vue?</h2>
    </li>
    <ul>
      <li>
        <p>Viu es un framework de Javascript para interfaces de usuario</p>
      </li>
      <li>
        <p>
          Junta las bases de HTML, CSS, y JavaScript y proporciona a modelo de
          programacion declarativo y basado en componentes que ayuda a
          desarrollar interfaces de cualquier complejidad.
        </p>
      </li>
    </ul>
  </ul>
  <PractiquillasPr1 v-for="card in myData" v-bind="card" @test="doSomething" />
  <NuxtLink href="/page2">Siguente</NuxtLink>
</template>
