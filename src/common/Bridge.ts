import { IpcRendererEvent } from "electron";
import { IpcChannel } from "./IpcChannel";

export interface IpcRendererBridge {
    readonly send: <T>(channel: IpcChannel, ...arg: T[]) => void;

    readonly sendSync: <ArgumentType, ReturnType>(
        channel: IpcChannel,
        ...arg: ArgumentType[]
    ) => ReturnType;

    readonly on: <T>(
        channel: IpcChannel,
        listener: (event: IpcRendererEvent, ...arg: T[]) => void
    ) => void;

    readonly once: <T>(
        channel: IpcChannel,
        listener: (event: IpcRendererEvent, ...arg: T[]) => void
    ) => void;

    readonly invoke: <ArgumentType, ReturnType>(
        channel: IpcChannel,
        ...arg: ArgumentType[]
    ) => Promise<ReturnType>;
}

export interface Bridge {
    readonly ipcRenderer: IpcRendererBridge;
}
