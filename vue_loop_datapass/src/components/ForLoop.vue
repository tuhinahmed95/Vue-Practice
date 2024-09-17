<template>
    <h1>This is a Another foor lop Practice</h1>
    <ul> 
        <li v-for="data in tools" :key="data">{{ data }}</li>
    </ul>
    <br><br>
    <ul>
        <li v-for="getData in information" :key="getData">Name : {{ getData.name }}, Email: {{ getData.email }},Address: {{ getData.address }},Phone: {{ getData.phone }}</li>
    </ul>
</template>

<script> 
export default { 
    name:'ForLoop',
    data(){ 
        return{ 
            tools:['github','vscode','postman'],
            information:[{ 
                name:'Tuhin Ahmed',
                email:'tuhin@gmail.com',
                address:'khilkhet',
                phone:'9999'
            },
            { 
                name:'Tasrif Ahmed',
                email:'tasrif@gmail.com',
                address:'Dhaka',
                phone:'8888'
            },
            { 
                name:'Touhid Ahmed',
                email:'touhid@gmail.com',
                address:'uttara',
                phone:'7777'
            }
        ]
        }
    }
}
</script>

<style scoped>
h1{ 
    color: brown;
}
</style>