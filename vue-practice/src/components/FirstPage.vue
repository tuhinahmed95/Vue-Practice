<template>
    <h1>Phone : {{ phone }}</h1>
    <h1>Phone : {{ phone =999}}</h1>
    <h1>Email : {{ email }}</h1>
    <h1>Phone : {{ getName }}</h1>
</template>

<script>
export default {
    name: "FirstPage",
    data(){ 
        return{ 
            phone: 8666,
            email: "tuhin@gmail.com",
        }
    
       
    },

    methods:{
        getName(){ 
            return 'Tasrif';
        }
    }
   
}
</script>

<style scoped>
h1{ 
    color: red;
}
</style>