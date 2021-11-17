import { App, IpcMain } from "electron";
import { IpcChannel } from "../common/IpcChannel";
import { WindowManager } from "./WindowManager";

export class MainApplication {
    constructor(
        private readonly electronApp: App,
        private readonly ipcMain: IpcMain,
        private readonly windowManager: WindowManager
    ) {}

    public start(): void {
        this.registerElectronAppEventListeners();
    }

    private registerElectronAppEventListeners(): void {
        this.electronApp.on("ready", () => this.startApp());
        this.electronApp.on("window-all-closed", () => this.electronApp.quit());
    }

    private startApp(): void {
        this.registerIpcEventListeners();
        this.createBrowserWindow();
    }

    private createBrowserWindow(): void {
        this.windowManager.createWindow();
    }

    private registerIpcEventListeners(): void {
        // tslint:disable-next-line: no-console
        this.ipcMain.on(IpcChannel.rendererReady, () =>
            console.log("renderer is ready")
        );
    }
}
