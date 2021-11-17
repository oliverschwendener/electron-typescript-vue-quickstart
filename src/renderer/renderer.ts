import { createApp } from "vue";
import App from "./App.vue";

const vueApp = createApp(App);
vueApp.config.globalProperties.ipcRenderer = window.ipcRenderer;
vueApp.mount("#app");
