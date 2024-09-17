<template>
<h1>For loop in vue js</h1>
<ul>
    <li v-for="item in technology" :key="item">{{ item }}</li>
</ul>
<br><br>
<ul>
    <li v-for="data in user" :key="data">Name is:{{ data.name }}, And Email is: {{ data.email }}</li>
</ul>
</template>

<script>
export default {
    name: 'HomeComponents',
    data() {
        return {
            technology: ['java', 'php', 'node'],
            user: [{
                    name: 'Tuhin',
                    email: 'tuhina@gmail.com',
                },
                {
                    name: 'Sam',
                    email: 'sam@gmail.com',
                },
                {
                    name: 'Peeter',
                    email: 'peeter@gmail.com',
                }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
