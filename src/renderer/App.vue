<template>
    <div>
        <HelloWorld />
    </div>
</template>

<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
import { IpcChannel } from "../common/IpcChannel";
import { onMounted } from "vue";

onMounted(() => {
    window.ipcRenderer.send(IpcChannel.rendererReady);
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
