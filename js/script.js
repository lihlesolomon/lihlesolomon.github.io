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
    { 
        id: 2, 
        name: "Stanley Cup Black", 
        description: "High-quality black Stanley cup 1.18L Tumbler (Found on Bash)", 
        link: "https://bash.com/stanley-quencher-h2-o-flowstate-black-1-18l-tumbler-130609adjq5/p?idsku=1467828&bash_campaign=21837353019&gad_source=1&gbraid=0AAAAADGg3Y8CXTUt2kJ86mrobwRoQqT2R&gclid=EAIaIQobChMI7amhv_S7jAMVyZJQBh0-ky_gEAQYASABEgJf5fD_BwE", 
        image: "images/stanley-cup.jpeg" 
    },
    { 
        id: 3, 
        name: "Makeup Bag", 
        description: "From Glo Classic Beauty Palour on IG", 
        link: "#", 
        image: "images/makeup-bag.jpeg" 
    },
    { 
        id: 4, 
        name: "Zara Leather Jacket", 
        description: "LEATHER-EFFECT BIKER JACKET - size Medium", 
        link: "https://www.zara.com/za/en/-l-e-a-t-h-e-r---e-f-f-e-c-t---b-i-k-e-r---j-a-c-k-e-t--p08491400.html?v1=447116885&v2=2510667", 
        image: "images/leather-jacket.jpeg" 
    },
    { 
        id: 5, 
        name: "Cash R1000", 
        description: "Monetary gift of R1000", 
        link: "#", 
        image: "images/cash.jpeg" 
    },
    { 
        id: 6, 
        name: "Edgars 212 VIP Black", 
        description: "212 VIP BLACK STIMULATING & Powerful", 
        link: "https://www.edgars.co.za/products/212-vip-men-black-eau-de-parfum-c28200330?srsltid=AfmBOooajR1U2dQWkGxHGd__1w6wbH9flmf2YhJP5LPWPD5wz4b8lyFS", 
        image: "images/perfume.jpeg" 
    },
    { 
        id: 7, 
        name: "Factory NBA Set", 
        description: "NBA Track Pant & NBA Hoodie - size Large (Sold Separate)", 
        link: "https://cottonon.com/ZA/nba-track-pant/5299813-01.html?dwvar_5299813-01_color=5299813-01&cgid=mens-fleece-bottoms&originalPid=5299813-01#start=7&sz=60", 
        image: "images/nba-set.jpeg" 
    },
    { 
        id: 8, 
        name: "Adidas Samba OG", 
        description: "adidas Originals Men's Samba OG Sneaker - size 6 (FOUND ON BASH)", 
        link: "https://bash.com/adidas-originals-men-s-samba-og-sneaker-061017aajg4/p", 
        image: "images/samba-shoes.jpeg" 
    },
    { 
        id: 9, 
        name: "Airforce 1 White", 
        description: "White Airforce 1 - size 6 (FOUND ON BASH)", 
        link: "https://bash.com/nike-men-s-air-force-1-07-white-sneaker-060601abug4/p?idsku=971910&bash_campaign=20746270549&gad_source=1&gclid=CjwKCAjw47i_BhBTEiwAaJfPpgUstO11TpPxCKLPfoCZRB-Nn1H16TRrfOhCxB4NTKi_eGsoXWJfkRoCs1MQAvD_BwE", 
        image: "images/airforce.jpeg" 
    },
    { 
        id: 10, 
        name: "Steve Madden Leon Cognac Brown", 
        description: "LEON COGNAC LEATHER BROWN - size 8 (currently on sale online)", 
        link: "https://stevemadden.co.za/collections/sm-mens-shoes-sandals/products/leon-black-leather", 
        image: "images/steve-madden.jpeg" 
    },
    { 
        id: 11, 
        name: "Steve Madden Leon Cognac Black", 
        description: "LEON COGNAC LEATHER BLACK - size 8 (currently on sale online)", 
        link: "https://stevemadden.co.za/collections/sm-mens-shoes-sandals/products/leon-black-leather", 
        image: "images/steve-madden-black.jpeg" 
    },
    { 
        id: 12, 
        name: "Steve Madden Denim Set", 
        description: "BLAKE MID BLUE PRINTED DENIM SHIRT - Large & ALEX MID BLUE PRINTED DENIM SHORTS - size 34 (currently on sale online)", 
        link: "https://stevemadden.co.za/collections/sm-mens-clothing/products/blake-mid-blue-printed-denim-shirt", 
        image: "images/denim-set.jpeg" 
    },
    { 
        id: 13, 
        name: "Crocs Echo Black", 
        description: "Crocs Men's Echo Black Clog - size 6.5 (FOUND ON BASH)", 
        link: "https://bash.com/crocs-men-s-echo-black-clog-060601agml0/p", 
        image: "images/crocs.jpeg" 
    },
    { 
        id: 14, 
        name: "Kapten & Son Lund Pro All Black", 
        description: "LUND PRO ALL BLACK (50% discount available)", 
        link: "https://kapten-son.co.za/products/lund-pro-all-black", 
        image: "images/kapten-son.jpeg" 
    }

];

// App State
let selections = [];
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
    selectionsBody: document.getElementById('selectionsBody'),
    imageZoomModal: document.getElementById('imageZoomModal'),
    zoomedImage: document.getElementById('zoomedImage'),
    closeZoom: document.querySelector('.close-zoom'),
    closeModal: document.querySelector('.close-modal')
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
    database.ref('selections').on('value', (snapshot) => {
        const data = snapshot.val() || {};
        selections = Object.values(data);
        renderGifts();
        updateAdminTables();
        showSyncStatus('Database updated');
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
                <div class="gift-actions">
                    ${hasValidLink ? `
                    <a href="${gift.link}" class="btn btn-outline" target="_blank" rel="noopener">
                        <i class="fas fa-shopping-cart"></i> Buy
                    </a>` : ''}
                    <button onclick="handleGiftSelection(${gift.id})" class="btn" ${isSelected ? 'disabled' : ''}>
                        ${isSelected ? 
                            '<i class="fas fa-check-circle"></i> Selected' : 
                            '<i class="far fa-heart"></i> Select'}
                    </button>
                </div>
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
    celebration.innerHTML = `
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
        <div class="confetti"></div>
    `;
    document.body.appendChild(celebration);
    
    setTimeout(() => {
        celebration.style.opacity = '0';
        setTimeout(() => celebration.remove(), 1000);
    }, 2000);
}
// RSVP Form Handling
document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const rsvpData = {
        name: document.getElementById('rsvpName').value,
        attending: document.querySelector('input[name="attending"]:checked').value,
        message: document.getElementById('rsvpMessage').value,
        date: new Date().toISOString()
    };

    try {
        // Push to Firebase
        const newRsvpRef = database.ref('rsvps').push();
        await newRsvpRef.set(rsvpData);
        
        showSyncStatus('RSVP submitted successfully!');
        this.reset();
    } catch (error) {
        showSyncStatus('Failed to submit RSVP', 'error');
        console.error(error);
    }
});

// Update gift rendering to show "View details"
function renderGifts() {
    elements.giftGrid.innerHTML = '';
    
    gifts.forEach(gift => {
        // ... existing code ...
        card.innerHTML = `
            <!-- ... other elements ... -->
            <div class="gift-content">
                <h3>${gift.name}</h3>
                <p>${gift.description}</p>
                ${gift.link !== '#' ? `
                <a href="${gift.link}" class="gift-link" target="_blank">
                    View details <i class="fas fa-arrow-right"></i>
                </a>` : ''}
                <button onclick="handleGiftSelection(${gift.id})" class="btn">
                    ${isSelected ? 'Selected' : 'Select Gift'}
                </button>
            </div>
        `;
        // ... rest of function ...
    });
}

// ======================
// Event Handlers
// ======================
function handleGiftSelection(giftId) {
    if (isAdmin) {
        // Admin can select/unselect directly
        if (selections.some(s => s.giftId === giftId)) {
            adminUnselectGift(giftId);
        } else {
            selectGift(giftId);
        }
    } else {
        // Regular user flow
        selectGift(giftId);
    }
}

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
        
        // In production, replace with Firebase Auth
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

    // Close modals
    elements.closeModal.addEventListener('click', () => {
        elements.passwordModal.style.display = 'none';
    });

    elements.closeZoom.addEventListener('click', () => {
        elements.imageZoomModal.style.display = 'none';
    });

    // Click outside modals
    window.addEventListener('click', (e) => {
        if (e.target === elements.passwordModal) {
            elements.passwordModal.style.display = 'none';
        }
        if (e.target === elements.imageZoomModal) {
            elements.imageZoomModal.style.display = 'none';
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
}

// ======================
// Utility Functions
// ======================
function initSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === n);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    showSlide(0);
    setInterval(nextSlide, 5000);
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
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gift-selections-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showSyncStatus('Gift selections exported');
}

// Make functions available globally
window.handleGiftSelection = handleGiftSelection;
window.adminUnselectGift = adminUnselectGift;
