const path = require("path");
const url = require("url");
const {
  app,
  BrowserWindow,
  Menu,
  globalShortcut,
  ipcMain,
} = require("electron");

const store = require("./store");

let mainWindow;

let isDev = false;

if (
  process.env.NODE_ENV !== undefined &&
  process.env.NODE_ENV === "development"
) {
  isDev = true;
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    show: false,
    icon: "./assets/icons/logo.png",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  let indexPath;

  if (isDev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:8080/",
      pathname: "index.html",
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();

    // Open devtools if dev
    if (isDev) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
      } = require("electron-devtools-installer");

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
        console.log("Error loading React DevTools: ", err)
      );
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", () => {
  createMainWindow();

  const newStore = new store({
    fileName: "userKay",
    data: {},
  });

  mainWindow.webContents.on("dom-ready", () => {
    mainWindow.webContents.send("getUser", newStore.get());
  });
  //   Menu.setApplicationMenu(false);
  Menu.setApplicationMenu(null);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();

    Menu.setApplicationMenu(null);

    globalShortcut.register("CmdOrCtrl+R", () => mainWindow.reload());
    globalShortcut.register("Ctrl+Shift+I", () => mainWindow.toggleDevTools());
  }
});

ipcMain.on("create", (e, options = "ttt") => {
  console.log(options);
  const setStore = new store({
    fileName: "userKay",
    data: {},
  });

  setStore.set(options);
  console.log("ttt", options);
});

// Stop error
app.allowRendererProcessReuse = true;
