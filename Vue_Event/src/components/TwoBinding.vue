<template>
    <h1>Two Way Binding</h1>
    <input type="text" v-model="count">
    <h3>{{ count }}</h3>
</template>

<script>
export default { 
    name: 'TwoBinding',
    data(){ 
        return{ 
            count:10
        }
    }
}
</script>

<style scoped>
h1{ 
    color: green;
}
</style>