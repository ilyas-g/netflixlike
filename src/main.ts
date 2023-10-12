import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import router from './router';

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "home",
      component: () =>
        import("@/views/HomeView.vue"),
    },
    {
      path: "/listing",
      name: "listing",
      component: () =>
        import("@/views/ListingView.vue"),
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: () =>
        import("@/views/BookmarksView.vue"),
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)

app.use(createPinia())

app.use(router).mount('#app')
