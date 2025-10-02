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

  <!-- <div id="ej7">
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
  </div> -->

  <!-- ✅ Ejercicio 8: Contador con límites y estilo dinámico

Enunciado
Crea un contador que tenga un número mínimo (0) y máximo (10). Si el contador está en el límite, 
desactiva el botón correspondiente y cambia el color del número según el valor:

Verde si está entre 1 y 9.

Rojo si está en 0 o 10.

Requisitos:

Usa computed para el estilo dinámico.

Usa :disabled en los botones cuando se alcance un límite. -->

  <!-- <div id="ej8">
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
  </div> -->

  <!-- ✅ Ejercicio 9: Verificar si una palabra es palíndromo

Enunciado
Crea un input de texto donde el usuario pueda escribir una palabra. Muestra un mensaje que diga 
si la palabra es un palíndromo (igual al derecho y al revés).

Requisitos:

Usa v-model para el input.

Usa un computed o watch para analizar la palabra.

Ignora mayúsculas/minúsculas. -->

  <!-- <div id="ej9">
    <h1>Ejercicio 9</h1>
    <form action="#">
      <label for="palabra"
        >Introduce una palabra: <span>{{ wordValue.name }}</span></label
      ><br />
      <input type="text" name="palabra" id="palabra" v-model="wordValue.name" />
      <label for="isPalindrome">{{ palindrome }}</label>
    </form>
  </div> -->

  <!-- ✅ Ejercicio 10: Select dinámico y filtro de productos
Enunciado
Crea una lista de productos con nombre y categoría. Agrega un select con categorías para filtrar los productos. 
Requisitos: Usa un array de productos (nombre y categoría). Usa un computed para mostrar los productos 
filtrados por la categoría seleccionada. Muestra todos si no se ha seleccionado ninguna categoría. -->

  <!-- <div id="ej10">
    <h1>Ejercicio 10</h1>
    <select name="categorias" id="category" v-model="selectedCategory">
      <option value="">Seleccione una categoria</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <ul>
      <li v-for="product in filteredProducts" :key="product.name">
        {{ product.name }} - {{ product.category }}
      </li>
    </ul>
  </div> -->

  <!-- ✅ Ejercicio 11: Lista de usuarios con búsqueda en vivo

Enunciado
Crea una lista de usuarios y un campo de búsqueda. A medida que el usuario escribe, se deben mostrar 
solo los usuarios cuyo nombre coincida parcial o totalmente.

Requisitos:

Usa un array de usuarios con al menos nombre y email.

Usa v-model para enlazar el campo de búsqueda.

Usa computed para filtrar la lista en tiempo real.

La búsqueda debe ser insensible a mayúsculas/minúsculas. -->

  <!-- <div id="ej11">
    
    <input
      type="text"
      name="Nombre"
      id="palabra"
      v-model="searchName"
      placeholder="Intoduzca un nombre"
    />
    <ul>
      <li v-for="user in users" :key="user.name">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div> -->
  <div id="ej11">
    <h1>Ejercicio 11</h1>
    <input
      v-model="searchName"
      type="text"
      placeholder="Buscar por nombre..."
    />

    <ul>
      <li v-for="user in matchingNames" :key="user.email">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>

    <p v-if="matchingNames.length === 0">No se encontraron usuarios.</p>
  </div>
  <!-- ✅ Ejercicio 12: Formulario de registro con validación reactiva

Enunciado
Crea un formulario con los campos: nombre, email y contraseña. Muestra mensajes de error en tiempo real 
si el campo no cumple con condiciones mínimas.

Requisitos:

Usa v-model en cada campo.

Valida que:

El nombre tenga al menos 3 caracteres.

El email contenga @.

La contraseña tenga al menos 6 caracteres.

Usa computed para mostrar si el formulario está listo para enviar.

Desactiva el botón "Registrar" hasta que todo sea válido. -->
  <div id="ej12">
    <h1>Ejercicio 12</h1>
    <form action="#">
      <label for="name">Nombre: </label>
      <input
        type="text"
        name=""
        id=""
        v-model="inpName"
        @blur="nameTouched = true"
      /><br /><br />
      <p v-if="nameTouched && errorName" @blur="">
        Introduzca un formato de nombre valido
      </p>
      <label for="email">Email: </label>
      <input
        type="text"
        name=""
        id=""
        v-model="inpEmail"
        @blur="emailTouched = true"
      /><br /><br />
      <p v-if="emailTouched && errorEmail">
        Introduzca un formato de email valido
      </p>
      <label for="pwd">Contraseña: </label>
      <input
        type="text"
        name=""
        id=""
        v-model="inpPassword"
        @blur="passwordTouched = true"
      /><br /><br />
      <p v-if="passwordTouched && errorPassword">
        Introduzca un formato de contraseña valido
      </p>
      <button :disabled="!submitable" type="submit">Enviar</button>
    </form>
  </div>
  <!-- ✅ Ejercicio 13: Contador de caracteres con límite y advertencia

Enunciado
Crea un textarea para escribir un mensaje con un límite de 100 caracteres. Muestra en tiempo real cuántos 
caracteres quedan, y cambia el color del contador si se pasa del límite.

Requisitos:

Usa v-model para enlazar el texto.

Usa computed para calcular los caracteres restantes.

Si se pasa del límite, muestra el contador en rojo y desactiva el botón de "Enviar".

Si está dentro del límite, muestra el contador en verde. -->

  <div id="ej13">
    <h1>Ejercicio 13</h1>
    <textarea name="" id="" v-model="textarea"></textarea>
    <p>
      Caracteres usados:
      <span :style="wordsLeft > 100 ? 'color:red' : 'color:green'">
        {{ wordsLeft }}
      </span>
    </p>
    <button :disabled="wordsLeft > 100" type="submit">Enviar</button>
  </div>

  <!-- ✅ Ejercicio 14: Lista de productos con ordenamiento dinámico

Enunciado
Muestra una lista de productos (nombre y precio) con select un que permita al usuario ordenar por: Precio ascendente 
Precio descendente Nombre alfabéticamente Requisitos: Usa un array de productos. Usa v-model en el select.

Usa un computed para ordenar la lista según la opción seleccionada.

Muestra el listado actualizado automáticamente. -->

  <div id="ej14">
    <h1>Ejercicio 14</h1>
    <select name="categorias" id="category" v-model="selectedOrder">
      <option value="">Seleccione un orden</option>
      <option>Precio ascendente</option>
      <option>Precio descendente</option>
      <option>Alfabeticamente</option>
    </select>
    <ul>
      <li v-for="product in orderedProducts" :key="product.name">
        {{ product.name }} - {{ product.price }} €
      </li>
    </ul>
  </div>

  <!-- ✅ Ejercicio 15: Tabs dinámicos con contenido condicional

Enunciado
Crea una interfaz con 3 pestañas (Tabs): Inicio, Perfil, Configuración. Según la pestaña seleccionada, muestra contenido diferente sin recargar la página.

Requisitos:

Usa un array con los nombres de las pestañas.

Usa v-model o ref para saber qué pestaña está activa.

Usa v-if o v-show para mostrar el contenido correspondiente.

Aplica una clase activa al botón/tab seleccionado. -->

  <div id="ej15">
    <h1>Ejercicio 15</h1>
    <button>Inicio</button>
    <button>Perfil</button>
    <button>Configuración</button>
    <div v-if="isInicio">
      <h3>Pestaña de inicio</h3>
    </div>
    <div v-if="isPerfil">
      <h3>Pestaña de Perfil</h3>
    </div>
    <div v-if="isConfiguración">
      <h3>Pestaña de Configuración</h3>
    </div>
  </div>
</template>

<!-- Codigo -->

<script setup>
import { ref, watch, computed } from "vue";
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
const wordValue = ref({
  name: "",
});
const palindrome = ref("");
function isPalindrome(str) {
  const re = /[\W_]/;
  const cleanStr = str.toLowerCase().replace(re, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}
function checkIsPalindrome() {
  if (isPalindrome(wordValue.value.name)) {
    palindrome.value = "  Es palindromo";
  } else {
    palindrome.value = "  No es palindromo";
  }
}
watch(() => wordValue.value.name, checkIsPalindrome);
// Ejercicio 10
const products = ref([
  { name: "Ordenador", category: "Electrónica" },
  { name: "Movil", category: "Electrónica" },
  { name: "Camiseta", category: "Ropa" },
  { name: "Pantalón", category: "Ropa" },
  { name: "Mesa", category: "Hogar" },
]);
const selectedCategory = ref("");
const categories = computed(() => {
  // esto crea un array con solo las categorias
  const allCategories = products.value.map((p) => p.category);
  // y esto con set quita los repetidos y al poner ... delante lo reconvierte a un array normal(por alguna razon(que no entiendo))
  return [...new Set(allCategories)];
});
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(
    // esto hace que el resultado sean los elementos del array que coincieden con lo seleccionado en el select
    (product) => product.category === selectedCategory.value
  );
});
// Ejercicio 11
const users = ref([
  { name: "Ana Torres", email: "ana.torres@example.com" },
  { name: "Luis Pérez", email: "luis.perez@example.com" },
  { name: "Carlos Gómez", email: "carlos.gomez@example.com" },
  { name: "Lucía Martínez", email: "lucia.martinez@example.com" },
  { name: "Elena Ríos", email: "elena.rios@example.com" },
]);

const searchName = ref("");

const matchingNames = computed(() => {
  const match = searchName.value.trim().toLowerCase();
  if (!match) {
    return users.value;
  } else {
    return users.value.filter((user) =>
      user.name.toLowerCase().startsWith(match)
    );
  }
});
// Ejercicio 12
const inpName = ref("");
const inpEmail = ref("");
const inpPassword = ref("");
const errorName = ref(false);
const errorEmail = ref(false);
const errorPassword = ref(false);
const nameTouched = ref(false);
const emailTouched = ref(false);
const passwordTouched = ref(false);

const validName = computed(() => {
  const isValid = inpName.value.trim().length >= 3;
  errorName.value = !isValid;
  return isValid;
});

const validEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(inpEmail.value);
  errorEmail.value = !isValid;
  return isValid;
});

const validPassword = computed(() => {
  const isValid = inpPassword.value.length >= 6;
  errorPassword.value = !isValid;
  return isValid;
});

const submitable = computed(() => {
  return validName.value && validEmail.value && validPassword.value;
});
// Ejercicio 13
const textarea = ref("");
const wordsLeft = computed(() => {
  return textarea.value.length;
});
// Ejercicio 14
const electronicProducts = ref([
  { name: "Portatil", price: 1200 },
  { name: "Teclado", price: 40 },
  { name: "Raton", price: 25 },
  { name: "Monitor", price: 300 },
  { name: "Movil", price: 800 },
]);
const selectedOrder = ref("");
function sortPrizesUp(a, b) {
  return a.price - b.price;
}
function sortPrizesDown(a, b) {
  return b.price - a.price;
}
function sortNames(a, b) {
  return a.name.localeCompare(b.name);
}
function sortedUp() {
  const sorted = [...electronicProducts.value].sort(sortPrizesUp);
  return sorted.map(toRaw);
}
function sortedDown() {
  const sorted = [...electronicProducts.value].sort(sortPrizesDown);
  return sorted.map(toRaw);
}
function sortedAlphabeticaly() {
  const sorted = [...electronicProducts.value].sort(sortNames);
  return sorted.map(toRaw);
}

const orderedProducts = computed(() => {
  if (!selectedOrder.value) {
    return electronicProducts.value;
  } else if (selectedOrder.value == "Precio ascendente") {
    return sortedUp();
  } else if (selectedOrder.value == "Precio descendente") {
    return sortedDown();
  } else if (selectedOrder.value == "Alfabeticamente") {
    return sortedAlphabeticaly();
  }
});
// Ejercicio 15
</script>
