<template>
    <h1>Home Page</h1>
    <button v-on:click="test">Click Me</button>
</template>

<script> 
export default { 
    name: 'HomePage',
    methods:{ 
        test(){ 
            alert ('function called')
        }
    }
}
</script>