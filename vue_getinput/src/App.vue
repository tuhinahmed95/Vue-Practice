<template>
  <HelloWorld />
  <TheWelcome />
  <WelcomeItem />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import WelcomeItem from './components/WelcomeItem.vue';

 
export default { 
  name: 'App',
  components:{ 
    HelloWorld,
    TheWelcome,
    WelcomeItem,
  }
}
</script>