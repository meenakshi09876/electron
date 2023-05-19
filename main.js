 console.warn("main process")
const{app,BrowserWindow,Menu,Tray, dialog, globalShortcut, ipcMain}=require('electron')
ipcMain.on("msg",(event,arg)=>{
	console.log(arg);	event.reply("back-msg","thank you for data")
	
})
function createWindow(){
	const win = new BrowserWindow({
		width: 900,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			  nodeIntegrationInWorker: true,
			contextIsolation: false,
			enableRemoteModule: true,
		},
		
	});
	win.loadFile('index.html')
	// globalShortcut.register("K",()=>{
	// 		dialog.showOpenDialog({
	// 			defaultPath: app.getPath('desktop'),
	// 			buttonLabel: 'select file',
	// 		});
	// })
	let tray=new Tray('./image/orbit.png')
	tray.setToolTip("tray to elctron app")
	// tray.on('click',()=>{
	// 	win.isVisible()?win.hide():win.show()
	// })
	let template=[{label:'item1',type:'radio'},{label:'item2'}]
	let contextMenu = Menu.buildFromTemplate(template);
	tray.setContextMenu(contextMenu)
	let wc = win.webContents;
	wc.on('dom-ready', () => {
		console.warn('app dom is ready');
	});
	wc.on('did-finish-load', () => {
		console.warn('did finish load');
	});
	wc.on('new-window', () => {
		console.warn('new window open');
	});

	wc.on('before-input-event', () => {
		console.warn('some key is pressed');
	});
	win.webContents.on('context-menu',()=>{
		contextMenu.popup()
	})

}

app.whenReady().then(createWindow)



// let template1=[{label:'item1'},{label:'item2'},{role:'quit',label:'Close'},{role:'minimize'}]

/*
let isMac=process.platform=="darwin"
let template2 = [
	...isMac ?{ label: 'Blog', submenu: [{ label: 'About' }, { label: 'Version' }] }:[],
	{ label: 'File' },
	{ label: 'Operation', submenu: [isMac ?{ role: 'close',label:'Close' }:{ role: 'quit',label:'Quit' },
	 { label: 'Zoom' }] },
];
let menu = Menu.buildFromTemplate(template2);
Menu.setApplicationMenu(menu)
*/















//Main Process

// const { app, BrowserWindow,Menu,ipcMain,MenuItem } = require('electron');
// ipcMain.on("msg",(event,arg)=>{
// 	console.log(arg);
// 	event.reply("back-msg","thank you")
// 	// console.log(arg);
// })
// function createWindow() {
// 	const win = new BrowserWindow({
// 		width: 800,
// 		height: 600,
// 		webPreferences:{
// 		}
// 	});
// 	win.loadFile('index.html');

// 	win.webContents.openDevTools()
// 	const menu=new Menu()
// 	menu.append(new MenuItem({label:'MenuItem1',click(){console.log()}}))
// 	win.webContents.on('contextmenu',(e)=>{
// 		menu.popup(win,params.x,params.y)
// 	},false)


//GLOBAL SHORTCUT KEY
	// globalShortcut.register("K",()=>{
	// 	win.loadFile('other.html')
	// 	console.warn("K key pressed")
	// })

//ABOUT IMAGE UPLOAD
	// let wc=win.webContents;
	// wc.on('dom-ready',()=>{
	// 	console.warn('app dom is ready')
	// })
	// wc.on('did-finish-load', () => {
	// 	console.warn('did finish load');
	// });
	// wc.on('new-window', () => {
	// 	console.warn('new window open');
	// });

	// wc.on('before-input-event', () => {
	// 	console.warn('some key is pressed');
	// });
// }
// console.warn(process)
// app.whenReady().then(createWindow);
