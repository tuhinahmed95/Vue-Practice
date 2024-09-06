<template>
  <div id="app">
    <HelloWorld msg="Welcome to My First Vue Project" />
    <HomePage />
  </div>
</template>

<script>
import FirstPage from './components/FirstPage.vue';
import HelloWorld from './components/HelloWorld.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage,
    FirstPage
  }
}
</script>
