import axios from 'axios';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import * as Vue from 'vue'; // in Vue 3
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from "./router";
// import { createApp } from "vue";
// 
// import App from "./App.vue";
const app = Vue.createApp(App);
app.use(VueAxios, axios)

// const app = createApp(App);
// app.use(VueAxios, axios)
app.use(router)
app.mount("#app")
