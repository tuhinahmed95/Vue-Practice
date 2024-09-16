<script>
import ContactPage from './components/ContactPage.vue';
import HomePage from './components/HomePage.vue';

 
export default { 
  name:'App',
  components:{ 
    HomePage,
    ContactPage
  }
}
</script>

<template>
  <HomePage />
  <ContactPage/>
</template>