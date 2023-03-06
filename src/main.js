import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import CountryFlag from "vue-country-flag";
Vue.component("country-flag", CountryFlag);

createApp(App).mount("#app");

import "bootstrap/dist/js/bootstrap.bundle.js";
