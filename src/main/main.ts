import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "path";

let browserWindow: BrowserWindow | null;

app.on("ready", startApp);
app.on("window-all-closed", () => {
    app.quit();
});

function startApp() {
    createBrowserWindow();
    registerIpcListeners();
}

function createBrowserWindow() {
    browserWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    });
    browserWindow.loadFile(join(__dirname, "..", "views", "main.html"));
}

function registerIpcListeners() {
    ipcMain.on("renderer-ready", () => {
        // tslint:disable-next-line: no-console
        console.log("renderer is ready");
    });
}
