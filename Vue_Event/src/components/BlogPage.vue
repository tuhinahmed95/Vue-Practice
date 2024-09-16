<template>
    <h1>Blog Page</h1>
    <h2>Blog : {{ blog }}</h2>
    <h3>blog : {{ getBlog() }}</h3>
    <h4>Blog2 : {{ getBlog2('getblog 3') }}</h4>

</template>

<script> 
export default { 
    name: 'BlogPage',
    data(){ 
        return{
            blog: 'this blog is practice'
        }
    },
    methods:{ 
        getBlog(){ 
            return 'this is a blog methods'
        },
        getBlog2(blog2){ 
            return blog2;
        }
    }
}
</script>

<style scoped>
h3{ 
    color: gray;
}
</style>