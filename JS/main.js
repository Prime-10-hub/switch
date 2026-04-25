// ================================
// VARIABLES
// ================================

let track = document.querySelector('.ann-track')
let prevBtn = document.getElementById('ann-prev')
let nextBtn = document.getElementById('ann-next')

let totalMessages = 3
let currentIndex = 0
let timer = null


// ================================
// FUNCTIONS
// ================================

function goToMessage(index) {

    // Wrap around if going past boundaries
    if (index < 0) {
        index = totalMessages - 1
    }
    if (index >= totalMessages) {
        index = 0
    }

    currentIndex = index

    // Slide the track to the correct position
    let slideAmount = currentIndex * -100
    track.style.transform = 'translateX(' + slideAmount + '%)'
}

function startTimer() {
    timer = setInterval(function() {
        goToMessage(currentIndex + 1)
    }, 3000)
}

function resetTimer() {
    clearInterval(timer)
    startTimer()
}


// ================================
// EVENTS
// ================================

prevBtn.addEventListener('click', function() {
    goToMessage(currentIndex - 1)
    resetTimer()
})

nextBtn.addEventListener('click', function() {
    goToMessage(currentIndex + 1)
    resetTimer()
})


// ================================
// START
// ================================

goToMessage(0)
startTimer()