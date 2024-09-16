<template>
    <h1>Home Page</h1>
    <h1>Email : {{ email }}</h1>
    <h2>Phone : {{ phone=='888' }}</h2>
    <h2>Phone : {{ phone }}</h2>
    <p>Name : {{ GetName('Rafia,Anika,Faria,Sunna Apa') }}</p>
    <h6>Age : {{ getAge('27') }}</h6>
    <h3>Data : {{ getData('This is data') }}</h3>
</template>

<script> 
export default { 
    name:'HomePage',
    data(){ 
        return{ 
            email: 'tuli@test.com',
            phone : '888'
        }
    },
    methods: { 
        GetName(name){ 
            return name
        },
        getAge(age){ 
            return age;
        },
        getData(data){ 
            return data;
        }
    }
   
}
</script>

<style scoped>
h1{ 
    color: red;
}
</style>