// ================================
// VARIABLES
// ================================

let track = document.querySelector('.ann-track')
let prevBtn = document.getElementById('ann-prev')
let nextBtn = document.getElementById('ann-next')

let totalMessages = 3
let currentIndex = 0
// ================================
// FUNCTIONS
// ================================

function goToMessage(index) {

    // Keep index within bounds
    if (index < 0) {
        index = totalMessages - 1
    }
    if (index >= totalMessages) {
        index = 0
    }

    currentIndex = index

    // Slide the track
    let slideAmount = currentIndex * -100
    track.style.transform = 'translateX(' + slideAmount + '%)'
}
// ================================
// EVENTS
// ================================

prevBtn.addEventListener('click', function() {
    goToMessage(currentIndex - 1)
})

nextBtn.addEventListener('click', function() {
    goToMessage(currentIndex + 1)
})

// ================================
// START
// ================================

goToMessage(0)
