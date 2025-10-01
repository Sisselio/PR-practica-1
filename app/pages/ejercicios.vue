<template>
  <!-- 📘 Ejercicio 1: Mostrar mensaje dinámico

Enunciado: Crea una página en Nuxt 3 que muestre un mensaje dentro de un párrafo. Cambia el texto del mensaje utilizando ref dentro del setup().

Crea un archivo en pages (por ejemplo, mensaje.vue).

Define una variable mensaje como un ref dentro del setup().

Muestra el valor de mensaje en un párrafo. -->

  <div id="ej1">
    <h1>Ejercicio 1</h1>
    <p>{{ mensaje }}</p>
  </div>

  <!-- 📘 Ejercicio 2: Botón que cambia el mensaje

Enunciado: En la misma página que en el ejercicio anterior, agrega un botón. Cuando se haga clic, el mensaje debe cambiar a otro valor.

Crea un botón que ejecute una función que cambie el valor de la variable mensaje.

Usa un método dentro del setup() para actualizar el mensaje. -->

  <div id="ej2">
    <h1>Ejercicio 2</h1>
    <p>Frase: {{ frase }}</p>
    <button @click="() => (frase = nuevaFrase)">Cambiar frase</button>
  </div>

  <!-- 📘 Ejercicio 3: Contador con botones

Enunciado: Implementa un contador en una página de Nuxt 3 con dos botones: uno para aumentar el contador y otro para disminuirlo.

Crea un ref llamado contador que almacene el valor del contador.

Usa dos botones:

Un botón para aumentar el valor de contador.

Un botón para disminuir el valor de contador. -->

  <div id="ej3">
    <h1>Ejercicio 3</h1>
    <p>Contador: {{ contador }}</p>
    <button @click="() => contador++">Aumentar contador</button>
    <button @click="() => contador--">Disminuir contador</button>
  </div>

  <!-- 📘 Ejercicio 4: Mostrar u ocultar texto

Enunciado: Usa una variable booleana para mostrar u ocultar un párrafo con un botón. El texto debe mostrarse u ocultarse cada vez que se haga clic en el botón.

Crea un ref llamado mostrar que sea de tipo boolean.

En el template, muestra u oculta el párrafo utilizando v-if según el valor de mostrar.

El botón debe cambiar el valor de mostrar entre true y false. -->

  <div id="ej4">
    <h1>Ejercicio 4</h1>
    <p v-if="isVisible">Visible</p>
    <button @click="Visibilidad()">Cambiar visibilidad</button>
  </div>

  <!-- 📘 Ejercicio 5: Lista de frutas con v-for

Enunciado: Muestra una lista de frutas usando v-for y una variable ref en el setup().

Crea un ref llamado frutas que contenga un array con al menos 4 frutas.

En el template, muestra todas las frutas dentro de una lista (

) usando v-for.
Cada elemento de la lista debe ser un

que contenga el nombre de la fruta. -->

  <div id="ej5">
    <h1>Ejercicio 5</h1>
    <ul>
      <li v-for="fruta in frutas">
        {{ fruta }}
      </li>
    </ul>
    <ul>
      <li v-for="fruta in frutasSimples">
        {{ fruta.fruta }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
const mensaje = ref("Ejercicio 1");

const contador = ref(0);

const frase = ref("Hola");
const nuevaFrase = ref("Adios");

const isVisible = ref(true);
function Visibilidad() {
  isVisible.value = !isVisible.value;
}
const frutasSimples = ref([{ fruta: "Manzana" }, { fruta: "Pera" }]);
const frutas = ref(["Manzana", "Pera", "Platano", "Mango"]);
</script>
