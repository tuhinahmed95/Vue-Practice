<script>
import AboutSection from './components/AboutSection.vue';
import BlogPage from './components/BlogPage.vue';
import ContactPage from './components/ContactPage.vue';
import HomePage from './components/HomePage.vue';

 
export default { 
    name: 'App',
    components:{ 
        HomePage,
        ContactPage,
        BlogPage,
        AboutSection
    }
}
</script>

<template>
    <HomePage />
    <ContactPage />
    <BlogPage />
    <AboutSection />
</template>