'use strict';

const BrowserWindow = require('browser-window')
const path = require('path')

module.exports = class Messenger {
  constructor() {
    this.loaded = false

    this.window = new BrowserWindow({
      show: true,
      width: 0,
      height: 0,
      preload: path.join(__dirname, 'window.js')
    })

    this.window.loadUrl(`file://${__dirname}/index.html`);

    this.onLoad(() => {
      require('power-monitor').on('resume', this.reset.bind(this))
    })
  }

  onLoad(cb) {
    this.window.webContents.on('did-finish-load', cb.bind(this))
  }

  reset() {
    console.log('Resetting timer')
    this.window.webContents.send('reset')
  }
}
