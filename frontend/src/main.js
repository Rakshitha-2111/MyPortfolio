// src/main.js
import { createApp } from 'vue';  // Import Vue
import App from './App.vue';      // Import the root component
import router from './router';    // Import Vue Router for routing
import './assets/styles.css';     // Import global styles
import 'animate.css';            // Import animate.css for animations

const app = createApp(App);      // Create the Vue application
app.use(router);                 // Use the router for navigation
app.mount('#app');              // Mount the app to the DOM
