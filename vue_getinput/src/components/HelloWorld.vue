<template>
  <h1>Home Page</h1>
  <input type="text" placeholder="enter your email" v-model="email"><br><br>
  <input type="text" placeholder="enter your password" v-model="password"><br><br>
  <button type="button" v-on:click="getData">Get Values</button>
</template>

<script> 
export default { 
  name:'HelloWorld',
  data(){ 
    return{ 
      email: null,
      password:null,
    }
  },
  methods:{ 
    getData(){ 
      console.log("values",this.email,this.password);
    }
  }
}
</script>

<style scoped>
h1{ 
  color: green;
}
</style>