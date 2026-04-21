// ================================
// VARIABLES
// ================================

let messages = document.querySelectorAll('.ann-message')
let controlBtn = document.getElementById('ann-control')

let currentIndex = 0
let isPlaying = true
let timer = null

// ================================
// FUNCTIONS
// ================================

function showMessage(index) {
    messages.forEach(function(msg) {
        msg.classList.remove('active')
    })
    messages[index].classList.add('active')
}

function nextMessage() {
    currentIndex = currentIndex + 1
    if (currentIndex >= messages.length) {
        currentIndex = 0
    }
    showMessage(currentIndex)
}

function startPlaying() {
    timer = setInterval(nextMessage, 3000)
    isPlaying = true
    controlBtn.innerHTML = '❚❚'
    controlBtn.classList.remove('paused')
}

function stopPlaying() {
    clearInterval(timer)
    isPlaying = false
    controlBtn.innerHTML = '&#9654;'
    controlBtn.classList.add('paused')
}

function toggleControl() {
    if (isPlaying) {
        stopPlaying()
    } else {
        startPlaying()
    }
}

// ================================
// EVENTS
// ================================

controlBtn.addEventListener('click', toggleControl)

// ================================
// START
// ================================

showMessage(0)
startPlaying()