const btnstart = document.getElementById('start')
const btnreset = document.getElementById('reset')
const btnpause = document.getElementById('pause')

const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')

let min
let sec = 0
let timer = null
let isRunning = false

function start() {
  if (!isRunning) {
    isRunning = true
    timer = setInterval(function () {
      sec++
      let { min, second } = getTime(sec)
      minutes.textContent = min < 10 ? '0'+ min : min
      seconds.textContent = second < 10 ? '0' + second : second
    }, 1000)
  }
}
function reset() {
  isRunning = false
  clearInterval(timer)
  min = 0
  sec = 0
  minutes.textContent = '00'
  seconds.textContent = '00'
}
function pause() {
  isRunning = false
  clearInterval(timer)
}

function getTime(sec) {
  min = parseInt(sec / 60)
  let second = parseInt(sec % 60)
  return {
    min,
    second
  }
}

btnstart.addEventListener('click', start)
btnreset.addEventListener('click', reset)
btnpause.addEventListener('click', pause)