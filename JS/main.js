// ================================
// ANNOUNCEMENT BAR
// ================================

// Variables
let track = document.querySelector('.ann-track')
let prevBtn = document.getElementById('ann-prev')
let nextBtn = document.getElementById('ann-next')

let totalMessages = 3
let currentIndex = 1
let isTransitioning = false
let timer = null


// Functions

function goToPosition(index, animate) {
    if (animate) {
        track.style.transition = 'transform 0.4s ease'
    } else {
        track.style.transition = 'none'
    }
    let slideAmount = index * -100
    track.style.transform = 'translateX(' + slideAmount + '%)'
}

function goToMessage(index) {
    if (isTransitioning) return
    isTransitioning = true
    currentIndex = index
    goToPosition(currentIndex, true)
}

function handleInfiniteLoop() {
    if (currentIndex === totalMessages + 1) {
        currentIndex = 1
        goToPosition(currentIndex, false)
    }
    if (currentIndex === 0) {
        currentIndex = totalMessages
        goToPosition(currentIndex, false)
    }
    isTransitioning = false
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


// Events

prevBtn.addEventListener('click', function() {
    goToMessage(currentIndex - 1)
    resetTimer()
})

nextBtn.addEventListener('click', function() {
    goToMessage(currentIndex + 1)
    resetTimer()
})

track.addEventListener('transitionend', handleInfiniteLoop)


// Start
goToPosition(1, false)
startTimer()


// ================================
// NAVBAR
// ================================

let cartBtn = document.getElementById('cart-btn')
let cartCountEl = document.getElementById('cart-count')
let cartTotal = 0

function updateCart() {
    cartTotal = cartTotal + 1
    cartCountEl.innerText = cartTotal
}

cartBtn.addEventListener('click', updateCart)