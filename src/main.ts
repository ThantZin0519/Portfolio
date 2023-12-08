import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

createApp(App).use(router).mount('#app');
