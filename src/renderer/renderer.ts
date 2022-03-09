import App from "./App.vue";
import { createApp } from "vue";

const vueApp = createApp(App);
vueApp.config.globalProperties.ipcRenderer = window.ipcRenderer;
vueApp.mount("#app");
