import Vue from "vue";
import App from "./App.vue";
import { ipcRenderer } from "electron";

new Vue({
    render: (h) => h(App),

    mounted() {
        ipcRenderer.send("renderer-ready");
    },
}).$mount("#app");
