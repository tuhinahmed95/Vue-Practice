<template>
  <h1>This Is TheWelcome Page</h1>
  <input type="text" placeholder="Enter Your name" v-model="name"><br><br>
  <input type="password" placeholder="Enter Your Password" v-model="password"> <br><br>
  <input type="submit" value="Submit" v-on:click="getData">
</template>

<script> 
export default { 
  name:'TheWelcome',
  data(){ 
    return{ 
      name:null,
      password:null,
    }
  },
  methods:{ 
    getData(){ 
      console.log("values",this.name,this.password);
    }
  }
}
</script>

<style scoped>
h1{ 
  color: aqua;
}
</style>