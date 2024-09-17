<template>
<HomeComponents />
<ForLoop />
<ChildComponet name="Thin Ahmed" :details="user" :setData="getData" />
</template>

<script>
import ChildComponet from './components/ChildComponet.vue';
import ForLoop from './components/ForLoop.vue';
import HomeComponents from './components/HomeComponents.vue';

export default {
    name: 'App',
    components: {
        HomeComponents,
        ForLoop,
        ChildComponet
    },
    data() {
        return {
            user: {
                name: 'Alex',
                email: 'alex@gmail.com'
            },
        },
        methods: {
            getData() {
              colsole.log('function is called');
               
            }
        }
    }
}
</script>
