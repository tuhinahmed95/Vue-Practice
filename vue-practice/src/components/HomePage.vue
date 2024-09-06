<template>
    <h3>Email: {{ email }}</h3>
    <h3>Phone: {{ phone }}</h3>
    <h3>Name: {{ getName() }}</h3> <!-- getName() ফাংশন হিসেবে কল করা হয়েছে -->
</template>

<script>
export default {
    name: 'HomePage',
    data (){ 
        return { 
            email: 'tuhin@gmail.com',  // এখানে ইমেইল ঠিকানা সংরক্ষিত
            phone: '0175587876'         // এখানে ফোন নম্বর সংরক্ষিত
        }
    },
    methods: {  
        getName() {
            return "Tuhin Ahmed";       // ফাংশনটি নাম রিটার্ন করছে
        }
    }
}
</script>

<style scoped>
h3 { 
    color: green; 
    align-items: center;

}
</style>
