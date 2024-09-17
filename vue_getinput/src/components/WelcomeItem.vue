<template>
<h1>Get Checkbox & Radio Button Value</h1>
<h3>Technology</h3>
<label for="java">Jave</label>
<input type="checkbox" id="java" value="java" v-model="technology">

<label for="Php">Php</label>
<input type="checkbox" id="Php" value="Php" v-model="technology">

<label for="Node">Node</label>
<input type="checkbox" id="Node" value="Node" v-model="technology">

<h3>Who Am I</h3>
<label for="student">Student</label>
<input type="radio" value="student" id="student" v-model="profession">

<label for="developer">Developer</label>
<input type="radio" value="developer" id="developer" v-model="profession">

<label for="teacher">Teacher</label>
<input type="radio" value="teacher" id="teacher" v-model="profession">
<h4>Selected Technology : {{ technology }}</h4>
<h4>I am a {{ profession }}</h4>
</template>

<script>
export default {
    name: 'WelcomeItem',
    data() {
        return {
            technology: [],
            profession:null,
        }
    }
}
</script>

<style scoped>
h1 {
    color: cadetblue;
}
</style>
