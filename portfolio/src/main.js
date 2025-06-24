import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './Views/HomeView.vue'
import About from './Views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: 
    [{path: '/', name: 'HomeView', component: Home },
    {path: '/about', name: 'AboutView', component: About },
  ]
})

createApp(App).use(router).mount('#app')
