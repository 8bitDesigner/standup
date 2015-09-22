var ipc = require('ipc')
var oneHour = 3600000

function notify() {
  new Notification('Stand up!', {
    body: "Has it been an hour already? Time for a stroll!"
  })
}

var interval = setInterval(notify, oneHour)

ipc.on('reset', function() {
  clearInterval(interval)
  interval = setInterval(notify, oneHour)
})
