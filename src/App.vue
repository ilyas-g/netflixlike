<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  
  <main>
    <Header headerTest="okokok" />
    <h1 class="text-3xl font-bold underline bg-red-200">
    Hello world!
  </h1>
    <!-- <TheWelcome /> -->
  </main>
  <router-view></router-view>
</template>

<style scoped>

</style>
