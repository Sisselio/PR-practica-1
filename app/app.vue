<template>
  <div>
    <Transition name="fade-pages" mode="default" appear>
      <NuxtPage :key="$route.path" />
    </Transition>
  </div>
</template>
