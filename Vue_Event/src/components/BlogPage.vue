<template>
    <h1>Blog Page</h1>
    <button v-on:click="test2">Click me2</button>
</template>

<script> 
export default { 
    name:'Blogpage',
    methods:{ 
        test2(){ 
            alert ('function called 2')
        }
    }
}

</script>