<template>
<h1>Data pass From ParentComponent to ChildComponent</h1>
<h3>{{ name }}</h3>
<h4>{{ user.name }}</h4>
<button v-on:click="getData()">Call F</button>
</template>

<script>
 export default {
     name: 'ChildComponent',
     props: {
         name: String,
         user: Object,
         getData: function
     }
 }
</script>

<style scoped>
h1 {
    color: cadetblue;
}
</style>
