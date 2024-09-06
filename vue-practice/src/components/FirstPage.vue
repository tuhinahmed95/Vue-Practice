<template>
    <h1>Phone : {{ phone }}</h1>
    <h1>Phone : {{ phone ==999}}</h1>
    <h1>Email : {{ email ='tasrif@gmail.com'}}</h1>
    <h1>Name : {{ getName }}</h1>
</template>

<script>
export default {
    name: "FirstPage",
    data(){ 
        return{ 
            phone: 999,
            email: "tuhin@gmail.com",
        }
    
       
    },

    methods: {
        getName() {
            return "Tuhin Ahmed"; 
        }
    }
   
}
</script>

<style scoped>
h1{ 
    color: red;
}
</style>