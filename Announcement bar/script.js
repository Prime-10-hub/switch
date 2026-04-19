// ================================
// VARIABLES — find and store elements
// ================================

let announcementBar = document.getElementById('announcement-bar')
let closeBtn = document.getElementById('close-btn')
// ================================
// FUNCTIONS — what should happen
// ================================

function closeAnnouncement() {
    announcementBar.style.display = 'none'
}
// ================================
// EVENTS — when should it happen
// ================================

closeBtn.addEventListener('click', closeAnnouncement)
