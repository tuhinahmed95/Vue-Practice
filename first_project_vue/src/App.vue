<template>
  <div id="app">
    <HelloWorld msg="Welcome to My First Vue Project" />
    <SecondPage/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SecondPage from './components/SecondPage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    SecondPage,
  }
}
</script>
