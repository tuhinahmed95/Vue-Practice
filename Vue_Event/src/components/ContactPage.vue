<template>
<h2>This contact page</h2>
<h3>Contact : {{ contact }}</h3>
<h4>getName : {{ Number('5555') }}</h4>
<h5>getName : {{ getName('Tasrif') }}</h5>
<h6>getData : {{ getData('tuhin, tasrif,tomal,tonu') }}</h6>
</template>

<script>
 export default {
     name: 'ContactPage',
     data() {
         return {
             contact: '7777'
         }
     },
     methods: {
         getNumber(Number) {
             return Number;
         },
         getName(name){ 
            return name;
         },
         getData(data){ 
            return data;
         }
     }
 }
</script>

<style scoped>
h2 {
    color: green;
}
</style>
