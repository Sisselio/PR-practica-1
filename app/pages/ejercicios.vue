<template>
  <!-- 📘 Ejercicio 1: Mostrar mensaje dinámico

Enunciado: Crea una página en Nuxt 3 que muestre un mensaje dentro de un párrafo. Cambia el texto del mensaje utilizando ref dentro del setup().

Crea un archivo en pages (por ejemplo, mensaje.vue).

Define una variable mensaje como un ref dentro del setup().

Muestra el valor de mensaje en un párrafo. -->

  <!-- <div id="ej1">
    <h1>Ejercicio 1</h1>
    <p>{{ mensaje }}</p>
  </div> -->

  <!-- 📘 Ejercicio 2: Botón que cambia el mensaje

Enunciado: En la misma página que en el ejercicio anterior, agrega un botón. Cuando se haga clic, el mensaje debe cambiar a otro valor.

Crea un botón que ejecute una función que cambie el valor de la variable mensaje.

Usa un método dentro del setup() para actualizar el mensaje. -->

  <!-- <div id="ej2">
    <h1>Ejercicio 2</h1>
    <p>Frase: {{ frase }}</p>
    <button @click="() => (frase = nuevaFrase)">Cambiar frase</button>
  </div> -->

  <!-- 📘 Ejercicio 3: Contador con botones

Enunciado: Implementa un contador en una página de Nuxt 3 con dos botones: uno para aumentar el contador y otro para disminuirlo.

Crea un ref llamado contador que almacene el valor del contador.

Usa dos botones:

Un botón para aumentar el valor de contador.

Un botón para disminuir el valor de contador. -->

  <!-- <div id="ej3">
    <h1>Ejercicio 3</h1>
    <p>Contador: {{ contador1 }}</p>
    <button @click="() => contador++">Aumentar contador</button>
    <button @click="() => contador--">Disminuir contador</button>
  </div> -->

  <!-- 📘 Ejercicio 4: Mostrar u ocultar texto

Enunciado: Usa una variable booleana para mostrar u ocultar un párrafo con un botón. El texto debe mostrarse u ocultarse cada vez que se haga clic en el botón.

Crea un ref llamado mostrar que sea de tipo boolean.

En el template, muestra u oculta el párrafo utilizando v-if según el valor de mostrar.

El botón debe cambiar el valor de mostrar entre true y false. -->

  <!-- <div id="ej4">
    <h1>Ejercicio 4</h1>
    <p v-if="isVisible">Visible</p>
    <button @click="Visibilidad()">Cambiar visibilidad</button>
  </div>
  <div id="ej4">
    <h1>Ejercicio 4</h1>
    <p v-show="isVisible">Visible</p>
    <button @click="Visibilidad()">Cambiar visibilidad</button>
  </div> -->

  <!-- 📘 Ejercicio 5: Lista de frutas con v-for

Enunciado: Muestra una lista de frutas usando v-for y una variable ref en el setup().

Crea un ref llamado frutas que contenga un array con al menos 4 frutas.

En el template, muestra todas las frutas dentro de una lista (

) usando v-for.
Cada elemento de la lista debe ser un

que contenga el nombre de la fruta. -->

  <!-- <div id="ej5">
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
  </div> -->

  <!-- ✅ Ejercicio 6: Input con v-model y mensaje en vivo

Enunciado
Crea una página con un campo de texto (input) donde el usuario pueda escribir su nombre. 
Al mismo tiempo, muestra un mensaje en vivo que diga:
"Hola, [nombre]"

Requisitos:

Usa v-model para enlazar el input con una variable reactiva.

Usa interpolación para mostrar el mensaje en tiempo real. -->

  <!-- <div id="ej6">
    <form action="#">
      <h1>Ejercicio 6</h1>
      <label for="nombre"
        >Nombre: <span>{{ modelValue.name }}</span></label
      ><br />
      <input type="text" v-model="modelValue.name" />
    </form>
  </div> -->

  <!-- ✅ Ejercicio 7: Lista de tareas con añadir y eliminar

Enunciado
Crea una lista de tareas con un input y dos botones:

Un botón para añadir una tarea nueva.

Un botón junto a cada tarea para eliminarla.

Requisitos:

Usa un array de objetos reactivos (ref([])).

Usa v-for para renderizar las tareas.

Añade validación básica para evitar tareas vacías. -->

  <div id="ej7">
    <h1>Ejercicio 7</h1>
    <form action="#">
      <label for="tarea">Introduce una tarea: </label><br />
      <input type="text" name="tarea" id="tarea" v-model="tarea" />
      <button type="button" @click="InsertarTarea">Insertar tarea</button>
    </form>
    <ol>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <button @click="EliminarTarea(index)">Eliminar Tarea</button>
      </li>
    </ol>
  </div>

  <!-- ✅ Ejercicio 8: Contador con límites y estilo dinámico

Enunciado
Crea un contador que tenga un número mínimo (0) y máximo (10). Si el contador está en el límite, 
desactiva el botón correspondiente y cambia el color del número según el valor:

Verde si está entre 1 y 9.

Rojo si está en 0 o 10.

Requisitos:

Usa computed para el estilo dinámico.

Usa :disabled en los botones cuando se alcance un límite. -->

  <div id="ej8">
    <h1>Ejercicio 8</h1>
    <p
      :style="contador2 <= 0 || contador2 == 10 ? 'color:red' : 'color:green'"
      :class="['test']"
    >
      Contador: {{ contador2 }}
    </p>
    <button :disabled="contador2 === 0" @click="AdminContador(-1)">
      Disminuir contador
    </button>
    <button :disabled="contador2 === 10" @click="AdminContador(+1)">
      Aumentar contador
    </button>
  </div>

  <!-- ✅ Ejercicio 9: Verificar si una palabra es palíndromo

Enunciado
Crea un input de texto donde el usuario pueda escribir una palabra. Muestra un mensaje que diga 
si la palabra es un palíndromo (igual al derecho y al revés).

Requisitos:

Usa v-model para el input.

Usa un computed o watch para analizar la palabra.

Ignora mayúsculas/minúsculas. -->

  <!-- ✅ Ejercicio 10: Select dinámico y filtro de productos

Enunciado
Crea una lista de productos con nombre y categoría. Agrega un con categorías para filtrar los productos. 
Requisitos: Usa un array de productos (nombre y categoría). Usa un computed para mostrar los productos 
filtrados por la categoría seleccionada. Muestra todos si no se ha seleccionado ninguna categoría. -->
</template>
<script setup>
// import Child from "./Child.vue";
import { ref, computed } from "vue";
// Ejercicio 1
const mensaje = ref("Ejercicio 1");
// Ejercicio 2
const contador1 = ref(0);
// Ejercicio 3
const frase = ref("Hola");
const nuevaFrase = ref("Adios");
// Ejercicio 4
const isVisible = ref(true);
function Visibilidad() {
  isVisible.value = !isVisible.value;
}
// Ejercicio 5
const frutasSimples = ref([{ fruta: "Manzana" }, { fruta: "Pera" }]);
const frutas = ref(["Manzana", "Pera", "Platano", "Mango"]);
// Ejercicio 6
//const model = defineModel();
const modelValue = ref({
  name: "",
});
// Ejercicio 7
const tarea = ref("");
const tareas = ref([]);
function InsertarTarea() {
  if (tarea.value != "") {
    tareas.value.push(tarea.value);
    tarea.value = "";
  } else {
    alert("rellene los campos");
  }
}
function EliminarTarea(index) {
  tareas.value.splice(index, 1);
}
// Ejercicio 8
let contador2 = ref(5);
function AdminContador(num) {
  contador2.value += num;
}

// Ejercicio 9

// Ejercicio 16
</script>
