<template>
<div class="div1">
    <h3>Email: {{ email }}</h3>
    <h3>Phone: {{ phone }}</h3>
    <h3>Name: {{ getName("Tuhin") }}</h3>
    <h3>Name : {{ getName("Tasrif") }}</h3>
    <h3>All : {{ getData().name }}, {{ getData().email }}</h3>
    <h3>PhoneNumber : {{ getPhone().phoneNumber }}</h3>
    <button v-on:click="test()">Click</button>
    <button v-on:dblclick="test('button 2 is clicked')">Click 2</button>
    <h2>{{ count }}</h2>
</div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            email: 'tuhin@gmail.com',
            phone: '0175587876',
            count:0,
        }
    },
    methods: {
        getName(name) {
            return name;
        },
        getData(){ 
            return { 
                name : "tasrif",
                email: "tasrif@gmail.com",
            }
        },
        getPhone(){ 
            return{ 
                phoneNumber: '888999',
            }
        },
      
        test(message) { 
            console.log(message); 
            this.count=this.count+1 ; 
        }
      
      
    }

}
</script>

<style scoped>
.div1 {
    color: green;
    align-items: center;
    border: 1px solid black;
    padding-left: 20px;
    
}


</style>
