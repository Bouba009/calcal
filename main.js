const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // لتشغيل التطبيق من الملفات المحلية مباشرة دون الحاجة للإنترنت (الخيار الموصى به):
  win.loadFile('index.html'); 

  // ملاحظة: إذا كان مشروعك يستخدم مجلداً فرعياً للبناء مثل dist أو build (في حال استخدام React أو Vite)،
  // فقم بتغيير المسار ليصبح مثلاً: win.loadFile('dist/index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
