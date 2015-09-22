'use strict';

const app = require('app')
const Menu = require('menu')
const MenuItem = require('menu-item')
const Messenger = require('./lib/messenger')
const Tray = require('tray')
const path = require('path')

let tray, menu, quit, messenger

app.on('ready', function(){
  // Set up menu item tray
  tray = new Tray(path.join(__dirname, 'images', 'IconTemplate.png'))
  menu = new Menu()

  quit = new MenuItem({
    label: "Quit",
    click: app.quit
  })

  menu.append(quit)

  tray.setContextMenu(menu)
  tray.setToolTip('Stand up!')

  // Set up messenger window
  messenger = new Messenger()

  // Hide the dock
  app.dock.hide()
})

