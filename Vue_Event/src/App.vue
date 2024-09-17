<script>
import AboutSection from './components/AboutSection.vue';
import BlogPage from './components/BlogPage.vue';
import ContactPage from './components/ContactPage.vue';
import HomePage from './components/HomePage.vue';
import TwoBinding from './components/TwoBinding.vue';

 
export default { 
    name: 'App',
    components:{ 
        HomePage,
        ContactPage,
        BlogPage,
        AboutSection,
        TwoBinding
    }
}
</script>

<template>
    <HomePage />
    <ContactPage />
    <BlogPage />
    <AboutSection />
    <TwoBinding />
</template>