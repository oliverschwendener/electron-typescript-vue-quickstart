<template>
    <div>
        <HelloWorld />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IpcChannel } from "../common/IpcChannel";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
    components: {
        HelloWorld,
    },

    mounted() {
        window.Bridge.ipcRenderer.send(IpcChannel.rendererReady);
    },
});
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
}
</style>
