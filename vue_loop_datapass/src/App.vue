<template>
  <HomeComponents />
  <ForLoop />
</template>

<script>
import ForLoop from './components/ForLoop.vue';
import HomeComponents from './components/HomeComponents.vue';

export default { 
  name:'App',
  components:{ 
    HomeComponents,
    ForLoop
  }
}
</script>