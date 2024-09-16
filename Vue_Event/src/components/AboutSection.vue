<template>
    <h1 v-on:mousemove="getConsole">About Section</h1>
    <button v-on:click="test3()">Click Me3</button>
    <button v-on:dblclick="test3()">Click Me4</button>
    <h2>{{ count }}</h2>
</template>

<script> 
export default { 
    name:'AboutSection',
    data(){ 
        return{ 
            count:0
        }
    },
    methods:{ 
        test3(){ 
            this.count=10;
        },
        getConsole(){ 
            console.log('getconsole is called');
        }
    }
}
</script>