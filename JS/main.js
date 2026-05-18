// ================================
// ANNOUNCEMENT BAR
// ================================

let track = document.querySelector('.ann-track')
let prevBtn = document.getElementById('ann-prev')
let nextBtn = document.getElementById('ann-next')

let totalMessages = 3
let currentIndex = 1
let isTransitioning = false
let timer = null

function goToPosition(index, animate) {
    if (!track) return

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
    timer = setInterval(function () {
        goToMessage(currentIndex - 1)
    }, 3000)
}

function resetTimer() {
    clearInterval(timer)
    startTimer()
}

// Only run announcement events if the elements exist
if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function () {
        goToMessage(currentIndex + 1)
        resetTimer()
    })

    nextBtn.addEventListener('click', function () {
        goToMessage(currentIndex - 1)
        resetTimer()
    })

    track.addEventListener('transitionend', handleInfiniteLoop)

    goToPosition(1, false)
    startTimer()
}


// ================================
// NAVBAR
// ================================

let cartBtn = document.getElementById('cart-btn')
let cartCountEl = document.getElementById('cart-count')
let cartTotal = 0

let activeNavbar = document.querySelector('.active-nav')

function updateCart() {
    cartTotal = cartTotal + 1

    if (cartCountEl) {
        cartCountEl.innerText = cartTotal
    }
}

function handleScroll() {
    let scrollPosition = window.scrollY
    let heroBottom = hero.offsetTop + hero.offsetHeight

    if (scrollPosition > 50 && scrollPosition < heroBottom) {
        activeNavbar.style.backgroundColor = 'rgba(15, 5, 30, 0.85)'
        activeNavbar.style.backdropFilter = 'blur(12px)'
        activeNavbar.style.borderBottom = '1px solid rgba(255,255,255,0.1)'
        activeNavbar.querySelector('.nav-logo').style.color = 'white'
        activeNavbar.querySelectorAll('.nav-links a').forEach(function(link) {
            link.style.color = 'rgba(255,255,255,0.8)'
        })
        activeNavbar.querySelectorAll('.nav-icon').forEach(function(icon) {
            icon.style.color = 'white'
        })
    } else {
        activeNavbar.style.backgroundColor = '#ffffff'
        activeNavbar.style.backdropFilter = 'none'
        activeNavbar.style.borderBottom = '1px solid #eeeeee'
        activeNavbar.querySelector('.nav-logo').style.color = '#1a1a1a'
        activeNavbar.querySelectorAll('.nav-links a').forEach(function(link) {
            link.style.color = '#444444'
        })
        activeNavbar.querySelectorAll('.nav-icon').forEach(function(icon) {
            icon.style.color = '#1a1a1a'
        })
    }
}

function handleNavEnter() {
    if (window.scrollY > 50) {
        activeNavbar.style.backgroundColor = '#ffffff'
        activeNavbar.style.backdropFilter = 'none'
        activeNavbar.style.borderBottom = '1px solid #eeeeee'
        activeNavbar.querySelector('.nav-logo').style.color = '#1a1a1a'
        activeNavbar.querySelectorAll('.nav-links a').forEach(function(link) {
            link.style.color = '#444444'
        })
        activeNavbar.querySelectorAll('.nav-icon').forEach(function(icon) {
            icon.style.color = '#1a1a1a'
        })
    }
}

function handleNavLeave() {
    if (window.scrollY > 50) {
        handleScroll()
    }
}

cartBtn.addEventListener('click', updateCart)
window.addEventListener('scroll', handleScroll)
activeNavbar.addEventListener('mouseenter', handleNavEnter)
activeNavbar.addEventListener('mouseleave', handleNavLeave)