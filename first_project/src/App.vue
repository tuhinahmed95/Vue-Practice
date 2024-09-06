<script> 
export default{ 
  data () { 
    return{ 
      name: 'John Cina',
      status false,
    };
  }
}
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status">user is active</p>
  <p v-else>User is Unactive</p>
</template>



