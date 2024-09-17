<template>
  <h1>Home Page</h1>
  <input type="text" placeholder="enter your email"><br><br>
  <input type="text" placeholder="enter your password"><br><br>
  <button type="button" v-on:click="getData">Get Values</button>
</template>

<script> 
export default { 
  name:'HelloWorld',
  methods:{ 
    getData(){ 
      console.log("function called");
    }
  }
}
</script>

<style scoped>
h1{ 
  color: green;
}
</style>