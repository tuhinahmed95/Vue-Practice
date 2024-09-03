<template>
  <div id="app">
    <HelloWorld msg="Welcome to My First Vue Project" />
    <HomePage />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage
  }
}
</script>
