// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBriONGl6ZtXSdtJ-fFFqxtpGVp_OPcqJg",
    authDomain: "nickysbirthday-1e188.firebaseapp.com",
    databaseURL: "https://nickysbirthday-1e188-default-rtdb.firebaseio.com",
    projectId: "nickysbirthday-1e188",
    storageBucket: "nickysbirthday-1e188.appspot.com",
    messagingSenderId: "731449038490",
    appId: "1:731449038490:web:67139e3b425b60253fb123"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// Gift Data
const gifts = [
    { 
        id: 1, 
        name: "Gold Tempo Watch", 
        description: "Tempo Gold Plated Navy Dial Bracelet Watch (currently on sale online BASH)", 
        link: "https://bash.com/tempo-gold-plated-black-dial-bracelet-watch-05s710abjy8/p", 
        image: "images/watch.jpeg" 
    },
    // ... (keep all other gift objects exactly as they were) ...
];

// App State
let selections = [];
let rsvps = [];
let isAdmin = false;

// DOM Elements
const elements = {
    giftGrid: document.getElementById('giftGrid'),
    adminToggle: document.getElementById('adminToggle'),
    adminSection: document.getElementById('adminSection'),
    passwordModal: document.getElementById('passwordModal'),
    passwordForm: document.getElementById('passwordForm'),
    adminPassword: document.getElementById('adminPassword'),
    exportGiftsBtn: document.getElementById('exportGiftsBtn'),
    exportRsvpsBtn: document.getElementById('exportRsvpsBtn'),
    selectionsBody: document.getElementById('selectionsBody'),
    rsvpsBody: document.getElementById('rsvpsBody'),
    imageZoomModal: document.getElementById('imageZoomModal'),
    zoomedImage: document.getElementById('zoomedImage'),
    closeZoom: document.querySelector('.close-zoom'),
    closeModal: document.querySelector('.close-modal'),
    rsvpButton: document.getElementById('rsvpButton'),
    rsvpModal: document.getElementById('rsvpModal'),
    rsvpForm: document.getElementById('rsvpForm'),
    rsvpName: document.getElementById('rsvpName'),
    rsvpMessage: document.getElementById('rsvpMessage')
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initDatabaseListeners();
    renderGifts();
    initSlideshow();
    setupEventListeners();
});

// ======================
// Firebase Functions
// ======================
function initDatabaseListeners() {
    // Gift selections listener
    database.ref('selections').on('value', (snapshot) => {
        const data = snapshot.val() || {};
        selections = Object.values(data);
        renderGifts();
        updateAdminTables();
        showSyncStatus('Database updated');
    });

    // RSVPs listener
    database.ref('rsvps').on('value', (snapshot) => {
        const data = snapshot.val() || {};
        rsvps = Object.values(data);
        updateAdminTables();
    });
}

async function selectGift(giftId) {
    if (selections.some(s => s.giftId === giftId)) {
        showSelectionConflict(giftId);
        return;
    }

    const selectedBy = prompt("Please enter your name to select this gift:");
    if (!selectedBy) return;

    try {
        await database.ref(`selections/${giftId}`).set({
            giftId,
            selectedBy,
            date: new Date().toISOString()
        });
        showSyncStatus('Gift selected successfully!');
    } catch (error) {
        showSyncStatus('Failed to select gift', 'error');
        console.error("Firebase error:", error);
    }
}

async function adminUnselectGift(giftId) {
    if (!isAdmin) return;
    
    if (confirm('Are you sure you want to unselect this gift?')) {
        try {
            await database.ref(`selections/${giftId}`).remove();
            showSyncStatus('Gift unselected');
        } catch (error) {
            showSyncStatus('Failed to unselect gift', 'error');
            console.error("Firebase error:", error);
        }
    }
}

// ======================
// UI Functions
// ======================
function renderGifts() {
    elements.giftGrid.innerHTML = '';
    
    gifts.forEach(gift => {
        const isSelected = selections.some(s => s.giftId === gift.id);
        const selection = isSelected ? selections.find(s => s.giftId === gift.id) : null;
        const hasValidLink = gift.link && !['#', ''].includes(gift.link);
        
        const card = document.createElement('div');
        card.className = `gift-card ${isSelected ? 'selected' : ''}`;
        card.id = `gift-${gift.id}`;
        card.innerHTML = `
            <div class="gift-image" style="background-image: url('${gift.image}')" 
                 data-fullsize="${gift.image}"
                 aria-label="View larger image of ${gift.name}">
                ${isSelected ? `
                <div class="selected-badge">
                    <i class="fas fa-check"></i> Selected by ${selection?.selectedBy || 'Guest'}
                </div>` : ''}
            </div>
            <div class="gift-content">
                <h3 class="gift-title">${gift.name}</h3>
                <p class="gift-description">${gift.description}</p>
                ${hasValidLink ? `
                <a href="${gift.link}" class="gift-link" target="_blank" rel="noopener">
                    View details <i class="fas fa-arrow-right"></i>
                </a>` : ''}
                <button onclick="handleGiftSelection(${gift.id})" class="btn" ${isSelected ? 'disabled' : ''}>
                    ${isSelected ? 
                        '<i class="fas fa-check-circle"></i> Selected' : 
                        '<i class="far fa-heart"></i> Select'}
                </button>
            </div>
        `;
        
        // Preload image
        const img = new Image();
        img.src = gift.image;
        
        elements.giftGrid.appendChild(card);
    });
}

function updateAdminTables() {
    if (!isAdmin) return;
    
    // Update gifts table
    elements.selectionsBody.innerHTML = '';
    selections.forEach(selection => {
        const gift = gifts.find(g => g.id === selection.giftId);
        if (!gift) return;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${gift.name}</td>
            <td>${selection.selectedBy || 'Guest'}</td>
            <td>${new Date(selection.date).toLocaleString()}</td>
            <td>
                <button class="btn btn-outline" onclick="adminUnselectGift(${selection.giftId})">
                    <i class="fas fa-times"></i> Remove
                </button>
            </td>
        `;
        elements.selectionsBody.appendChild(row);
    });
    
    // Update RSVPs table
    elements.rsvpsBody.innerHTML = '';
    rsvps.forEach(rsvp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rsvp.name}</td>
            <td>${rsvp.attending === 'yes' ? 'Yes' : 'No'}</td>
            <td>${rsvp.message || '-'}</td>
            <td>${new Date(rsvp.date).toLocaleString()}</td>
        `;
        elements.rsvpsBody.appendChild(row);
    });
}

// RSVP Form Handling
async function handleRsvpSubmit(e) {
    e.preventDefault();
    
    const rsvpData = {
        name: elements.rsvpName.value,
        attending: document.querySelector('input[name="attending"]:checked').value,
        message: elements.rsvpMessage.value,
        date: new Date().toISOString()
    };

    try {
        const newRsvpRef = database.ref('rsvps').push();
        await newRsvpRef.set(rsvpData);
        
        showSyncStatus('RSVP submitted successfully!');
        elements.rsvpForm.reset();
        elements.rsvpModal.style.display = 'none';
        showCelebration();
    } catch (error) {
        showSyncStatus('Failed to submit RSVP', 'error');
        console.error("Firebase error:", error);
    }
}

// ======================
// Event Handlers
// ======================
function setupEventListeners() {
    // Admin toggle
    elements.adminToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isAdmin) {
            isAdmin = false;
            elements.adminSection.style.display = 'none';
            renderGifts();
        } else {
            elements.passwordModal.style.display = 'flex';
        }
    });

    // Password form
    elements.passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = elements.adminPassword.value;
        
        if (password === "nicky123") {
            isAdmin = true;
            elements.passwordModal.style.display = 'none';
            elements.adminSection.style.display = 'block';
            elements.adminPassword.value = '';
            renderGifts();
            updateAdminTables();
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    // RSVP button
    elements.rsvpButton.addEventListener('click', () => {
        elements.rsvpModal.style.display = 'flex';
    });

    // RSVP form
    elements.rsvpForm.addEventListener('submit', handleRsvpSubmit);

    // Close modals
    elements.closeModal.addEventListener('click', () => {
        elements.passwordModal.style.display = 'none';
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Click outside modals
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Image zoom
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('gift-image') || 
            e.target.parentElement.classList.contains('gift-image')) {
            const imageContainer = e.target.classList.contains('gift-image') ? 
                e.target : e.target.parentElement;
            const bgImage = imageContainer.style.backgroundImage;
            const imageUrl = bgImage.replace('url("', '').replace('")', '');
            
            elements.zoomedImage.src = '';
            elements.zoomedImage.classList.add('image-loading');
            elements.imageZoomModal.style.display = 'flex';
            
            const img = new Image();
            img.onload = () => {
                elements.zoomedImage.src = imageUrl;
                elements.zoomedImage.classList.remove('image-loading');
            };
            img.src = imageUrl;
        }
    });

    // Export buttons
    elements.exportGiftsBtn.addEventListener('click', exportGifts);
    elements.exportRsvpsBtn.addEventListener('click', exportRsvps);
}

// ======================
// Utility Functions
// ======================
function initSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    slides[currentSlide].classList.add('active');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

function exportGifts() {
    if (!isAdmin) return;
    
    let csv = 'Gift Name,Selected By,Date Selected\n';
    selections.forEach(selection => {
        const gift = gifts.find(g => g.id === selection.giftId);
        if (gift) {
            csv += `"${gift.name}","${selection.selectedBy || 'Guest'}","${selection.date}"\n`;
        }
    });
    
    downloadCsv(csv, 'gift-selections.csv');
    showSyncStatus('Gift selections exported');
}

function exportRsvps() {
    if (!isAdmin) return;
    
    let csv = 'Name,Attending,Message,Date\n';
    rsvps.forEach(rsvp => {
        csv += `"${rsvp.name}","${rsvp.attending}","${rsvp.message || ''}","${rsvp.date}"\n`;
    });
    
    downloadCsv(csv, 'event-rsvps.csv');
    showSyncStatus('RSVPs exported');
}

function downloadCsv(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function showSyncStatus(message, type = 'success') {
    const existingStatus = document.querySelector('.sync-status');
    if (existingStatus) existingStatus.remove();
    
    const status = document.createElement('div');
    status.className = `sync-status ${type}`;
    status.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    document.body.appendChild(status);
    
    setTimeout(() => {
        status.style.opacity = '0';
        setTimeout(() => status.remove(), 300);
    }, 3000);
}

function showSelectionConflict(giftId) {
    const gift = gifts.find(g => g.id === giftId);
    const selection = selections.find(s => s.giftId === giftId);
    
    const modal = document.createElement('div');
    modal.className = 'conflict-modal';
    modal.innerHTML = `
        <div class="conflict-modal-content">
            <h3><i class="fas fa-exclamation-triangle"></i> Already Selected</h3>
            <p>The "${gift.name}" was selected by ${selection.selectedBy}.</p>
            <button class="btn" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function showCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    
    // Create 50 confetti elements
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        celebration.appendChild(confetti);
    }
    
    document.body.appendChild(celebration);
    
    setTimeout(() => {
        celebration.style.opacity = '0';
        setTimeout(() => celebration.remove(), 1000);
    }, 3000);
}

// Make functions available globally
window.handleGiftSelection = function(giftId) {
    if (isAdmin) {
        if (selections.some(s => s.giftId === giftId)) {
            adminUnselectGift(giftId);
        } else {
            selectGift(giftId);
        }
    } else {
        selectGift(giftId);
    }
};

window.adminUnselectGift = adminUnselectGift;
