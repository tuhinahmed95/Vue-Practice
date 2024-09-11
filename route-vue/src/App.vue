<script setup>
import {RouterView, RouterLink  } from "vue-router";
</script>
<template>
  <nav> 
  
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/post">Post</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
   
  </nav>
  <RouterView />
</template>

<style scoped>
nav{ 
  width: 100%;
  font-size: 30px;
  border-bottom: 3px solid red;
}
nav a{ 
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  margin-top: 10px;
  border-radius: 5px;
}
nav a.router-link-exact-active{ 
  background-color: coral;
}
</style>