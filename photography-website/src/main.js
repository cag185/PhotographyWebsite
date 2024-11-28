import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import "./main.css";

import SplashPage from "./components/SplashPage.vue";
import PortraitGallery from "./Galleries/PortraitGallery.vue";

// Define the router instantiation
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: SplashPage },
  { path: "/portraits", component: PortraitGallery },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


createApp(App).use(router).mount('#app')
