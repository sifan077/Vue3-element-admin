import {createApp} from 'vue'
import App from './App.vue'
import './styles/style.css'
import store from "./store/index.js";
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "lib-flexible/flexible.js"


const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
