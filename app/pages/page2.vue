<template>
  <h1>Crear una aplicacion de Vue</h1>
  <ul>
    <li>
      <h2>Instanciar la aplicacion</h2>
    </li>
    <ul>
      <li>
        <p>
          Lo primero de todo es crear la instancia de la aplicacion con
          createApp:
        </p>
        <code>
          import { createApp } from 'vue'<br />
          const app = createApp({<br />
          /* root component options */ <br />})
        </code>
      </li>
    </ul>
    <li>
      <h2>El componente root</h2>
    </li>
    <ul>
      <li>
        <p>
          Cada app requiere un componente root que contine otros componentes
          como hijos
        </p>
        <code>
          import { createApp } from 'vue'<br />
          import App from './App.vue'<br />
          import { NuxtLink } from '../../.nuxt/components'; const app =
          createApp(App)
        </code>
      </li>
    </ul>

    <li>
      <h2>Montando la App</h2>
    </li>
    <ul>
      <li>
        <p>Cada aplicacion necesita su .mount() para poder funcionar</p>
        <p>
          El .mount() recibe como argumento un elemento del DOM que sera el id
          que tenga la etiqueta
        </p>
        <code> &lt;div id="app"&gt;&lt;/div&gt; </code> <br />
        <code> app.mount('#app') </code>
      </li>
    </ul>
  </ul>
  <NuxtLink href="/">Atras </NuxtLink
  ><NuxtLink href="/page3">Siguente</NuxtLink>
</template>
