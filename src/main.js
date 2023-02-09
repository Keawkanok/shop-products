import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import 'element-ui/lib/theme-chalk/index.css';
// import * as Vue from 'vue'
import "./assets/tailwind.css";

import './assets/tailwind.css'

// Vue.config.productionTip = false
// App.use(ElementUI);
const app = createApp(App)
app.use(router)
app.mount('#app')