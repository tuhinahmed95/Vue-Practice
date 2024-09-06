<template>
    <h3>Email: {{ email }}</h3>
    <h3>Phone: {{ phone }}</h3>
    <h3>Name: {{ getName() }}</h3> <!-- getName() ফাংশন হিসেবে কল করা হয়েছে -->
</template>

<script>
export default {
    name: 'HomePage',
    data (){ 
        return { 
            email: 'tuhin@gmail.com',
            phone: '0175587876'
        }
    },
    methods: {  // methods আলাদা সেকশনে রাখা হয়েছে
        getName() {
            return "Tuhin Ahmed";
        }
    }
}
</script>


<style scoped>
h3{ 
    color: green;
}
</style>