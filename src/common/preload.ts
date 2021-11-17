import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
import { Bridge } from "./Bridge";
import { IpcChannel } from "./IpcChannel";

contextBridge.exposeInMainWorld("Bridge", <Bridge>{
    ipcRenderer: {
        send: <T>(channel: IpcChannel, ...arg: T[]) =>
            ipcRenderer.send(channel.toString(), arg),

        sendSync: <ArgumentType, ReturnType>(
            channel: IpcChannel,
            ...arg: ArgumentType[]
        ): ReturnType => ipcRenderer.sendSync(channel.toString(), arg),

        on: <T>(
            channel: IpcChannel,
            listener: (event: IpcRendererEvent, ...args: T[]) => void
        ) => ipcRenderer.on(channel.toString(), listener),

        once: <T>(
            channel: IpcChannel,
            listener: (event: IpcRendererEvent, ...args: T[]) => void
        ) => ipcRenderer.once(channel.toString(), listener),

        invoke: <ArgumentType, ReturnType>(
            channel: IpcChannel,
            ...arg: ArgumentType[]
        ) => {
            return ipcRenderer.invoke(channel, arg) as Promise<ReturnType>;
        },
    },
});
