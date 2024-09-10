import { createRouter, createWebHistory,  } from "vue-router";
// define route component by importing
import HomeView from "@/viewss/HomeView.vue";
import AboutView from "@/viewss/AboutView.vue";
import ContactView from "@/viewss/ContactView.vue";
import PostView from "@/viewss/PostView.vue";

// define routes,Each route should map to a component
const routes =[ 
  { 
    path:'/',
    name:'home',
    component:HomeView
  },
  { 
    path:'/about',
    name:'about',
    component:AboutView
  },
  { 
    path:'/contact',
    name:'contact',
    component:ContactView
  },
  { 
    path:'/post',
    name:'post',
    component:PostView
  }
]

// create the router instance and pass the 'route' option
const router = createRouter({ 
  // provide the history impemention to use
  history:createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router