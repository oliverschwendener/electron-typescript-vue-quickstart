import { IpcRenderer } from "electron";

declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        ipcRenderer: IpcRenderer;
    }
}
