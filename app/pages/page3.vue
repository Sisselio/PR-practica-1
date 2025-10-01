<!-- <script setup lang="ts">
const seen = false;
</script> -->
<template>
  <h1>Sintaxis</h1>
  <ul>
    <li>
      <h2>Interpolacion de texto</h2>
    </li>
    <ul>
      <li>
        <p>
          La forma mas basica de unir datos es interpolar texto de manera que el
          valor atributo que este dentro de las llaves se mostrara en el HTML
        </p>
        <code> Message: &#123;&#123; msg &#125;&#125; </code>
      </li>
    </ul>
    <li>
      <h2>Raw HTML</h2>
    </li>
    <ul>
      <li>
        <p>
          Las llaves interpretan los datos que tienen dentro como texto, si
          quieres que dentro enseñe texto HTML necesitaras usar v-html
        </p>
        <code>
          <p>Usando interpolacion: &#123;&#123; rawHtml &#125;&#125;</p>
          <p>Usando v-html : v-html="rawHtml"</p>
        </code>
      </li>
    </ul>
    <li>
      <h2>Attribute Bindings</h2>
    </li>
    <ul>
      <li>
        <p>
          Las llaves no se pueden usar dentro de las etiquetas y en su lugar se
          usa v-bind
        </p>
        <code> v-bind:id="dynamicId" </code>
      </li>
      <li>
        <p>Ya que v-bind se usa tanto se puede acortar con ':' delante</p>
        <code> :id="dynamicId" </code>
      </li>
      <li>
        <p>
          Se puede usar con booleanos para indicar si un atributo es verdadero o
          falso
        </p>
        <code> :disabled="isButtonDisabled" </code>
      </li>
      <li>
        <p>Y se pueden usar varios en un mismo elemento</p>
        <code>
          const objectOfAttrs = { <br />id: 'container', <br />class: 'wrapper',
          <br />style: 'background-color:green' <br />}
        </code>
        <br /><br />
        <code>v-bind="objectOfAttrs"</code>
      </li>
    </ul>
    <li>
      <h2>Usando expresiones de JS</h2>
    </li>
    <ul>
      <li>
        <p>
          Dentro de las llaves tambien se puede introducir Expresiones simples
          de JS
        </p>
        <p>La condicion es que solo puede contener una una expresion</p>
        <code>
          &#123;&#123; number + 1 &#125;&#125;<br />

          &#123;&#123; ok ? "YES" : "NO" &#125;&#125;<br />

          &#123;&#123; message.split("").reverse().join("") &#125;&#125;<br />

          :id="list-$&#123;id&#125;"
        </code>
      </li>
      <p>La condicion es que solo puede contener una una expresion</p>
      <code>
        this is a statement, not an expression:<br />
        &#123;&#123; var a = 1 &#125;&#125;<br />

        flow control won't work either, use ternary expressions<br />
        &#123;&#123; if (ok) { return message } &#125;&#125;
      </code>
      <p>Y tambien se puede llamar a funciones dentro de las llaves</p>
      <code>
        :title="toTitleDate(date)" :datetime="date" &#123;&#123;
        formatDate(date) &#125;&#125;
      </code>
    </ul>
    <li>
      <h2>Directivas</h2>
    </li>
    <ul>
      <li>
        <p>Las directivas son atributos especiales que empiezan por v-</p>
        <code> Message: &#123;&#123; msg &#125;&#125; </code>
      </li>
    </ul>
  </ul>
  <a href="/page2">Atras </a><a href="/page4">Siguente</a>
</template>
