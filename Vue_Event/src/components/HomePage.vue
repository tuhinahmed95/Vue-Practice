<template>
    <h1>This Is Home Page</h1>
    <h2>Email : {{ email }},</h2>
    <h3>Phone Number : {{ phone ==8888}}</h3>
    <h3>Phone Number : {{ phone}}</h3>
    <h4>Full Name : {{ getName ('tuhin ahmed')}}</h4>
</template>

<script> 
export default{ 
    
    name: 'HomePage',
    data(){ 
        return{ 
            email:'tuhin@test.com',
            phone:'9999',
            getName:function(t){ 
                return t;
            }
        }
        
    }
   
}

</script>

<style scoped>
h1{ 
    color: burlywood;
}

</style>