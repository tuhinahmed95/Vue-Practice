<template>
<h3>Email: {{ email }}</h3>
<h3>Phone: {{ phone }}</h3>
<h3>Name: {{ getName() }}</h3>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            email: 'tuhin@gmail.com', 
            phone: '0175587876' 
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
h3 {
    color: green;
    align-items: center;

}
</style>
