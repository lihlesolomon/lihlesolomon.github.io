// Firebase configuration
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
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
- 4. js/script.js
```javascript
// Gift Data
const gifts = [
    { 
        id: 1, 
        name: "Gold Tempo Watch", 
        description: "Tempo Gold Plated Navy Dial Bracelet Watch (currently on sale online BASH)", 
        source: "Found on BASH",
        link: "https://bash.com/tempo-gold-plated-black-dial-bracelet-watch-05s710abjy8/p", 
        image: "images/watch.jpeg",
        options: [
            { label: "Size", value: "Standard" }
        ]
    },
    { 
        id: 2, 
        name: "Stanley Cup Black", 
        description: "High-quality black Stanley cup 1.18L Tumbler", 
        source: "Found on BASH",
        link: "https://bash.com/stanley-quencher-h2-o-flowstate-black-1-18l-tumbler-130609adjq5/p", 
        image: "images/stanley-cup.jpeg",
        options: [
            { label: "1st item", value: "99.0 cm" },
            { label: "2nd item", value: "4.8 cm" }
        ]
    },
    { 
        id: 3, 
        name: "Makeup Bag", 
        description: "From Glo Classic Beauty Palour on IG", 
        source: "Glo Classic Beauty",
        link: "#", 
        image: "images/makeup-bag.jpeg",
        options: []
    },
    { 
        id: 4, 
        name: "Zara Leather Jacket", 
        description: "LEATHER-EFFECT BIKER JACKET - size Medium", 
        source: "Zara",
        link: "https://www.zara.com/za/en/-l-e-a-t-h-e-r---e-f-f-e-c-t---b-i-k-e-r---j-a-c-k-e-t--p08491400.html?v1=447116885&v2=2510667", 
        image: "images/leather-jacket.jpeg",
        options: []
    },
    { 
        id: 5, 
        name: "Cash R1000", 
        description: "Monetary gift of R1000", 
        source: "",
        link: "#", 
        image: "images/cash.jpeg",
        options: []
    },
    { 
        id: 6, 
        name: "Edgars 212 VIP Black", 
        description: "212 VIP BLACK STIMULATING & Powerful", 
        source: "Edgars",
        link: "https://www.edgars.co.za/products/212-vip-men-black-eau-de-parfum-c28200330?srsltid=AfmBOooajR1U2dQWkGxHGd__1w6wbH9flmf2YhJP5LPWPD5wz4b8lyFS", 
        image: "images/perfume.jpeg",
        options: []
    },
    { 
        id: 7, 
        name: "Factory NBA Set", 
        description: "NBA Track Pant & NBA Hoodie - size Large (Sold Separate)", 
        source: "Cotton On",
        link: "https://cottonon.com/ZA/nba-track-pant/5299813-01.html?dwvar_5299813-01_color=5299813-01&cgid=mens-fleece-bottoms&originalPid=5299813-01#start=7&sz=60", 
        image: "images/nba-set.jpeg",
        options: []
    },
    { 
        id: 8, 
        name: "Adidas Samba OG", 
        description: "adidas Originals Men's Samba OG Sneaker - size 6 (FOUND ON BASH)", 
        source: "Bash",
        link: "https://bash.com/adidas-originals-men-s-samba-og-sneaker-061017aajg4/p", 
        image: "images/samba-shoes.jpeg",
        options: []
    },
    { 
        id: 9, 
        name: "Airforce 1 White", 
        description: "White Airforce 1 - size 6 (FOUND ON BASH)", 
        source: "Bash",
        link: "https://bash.com/nike-men-s-air-force-1-07-white-sneaker-060601abug4/p?idsku=971910&bash_campaign=20746270549&gad_source=1&gclid=CjwKCAjw47i_BhBTEiwAaJfPpgUstO11TpPxCKLPfoCZRB-Nn1H16TRrfOhCxB4NTKi_eGsoXWJfkRoCs1MQAvD_BwE", 
        image: "images/airforce.jpeg",
        options: []
    },
    { 
        id: 10, 
        name: "Steve Madden Leon Cognac Brown", 
        description: "LEON COGNAC LEATHER BROWN - size 8 (currently on sale online)", 
        source: "Steve Madden",
        link: "https://stevemadden.co.za/collections/sm-mens-shoes-sandals/products/leon-black-leather", 
        image: "images/steve-madden.jpeg",
        options: []
    },
    { 
        id: 11, 
        name: "Steve Madden Leon Cognac Black", 
        description: "LEON COGNAC LEATHER BLACK - size 8 (currently on sale online)", 
        source: "Steve Madden",
        link: "https://stevemadden.co.za/collections/sm-mens-shoes-sandals/products/leon-black-leather", 
        image: "images/steve-madden-black.jpeg",
        options: []
    },
    { 
        id: 12, 
        name: "Steve Madden Denim Set", 
        description: "BLAKE MID BLUE PRINTED DENIM SHIRT - Large & ALEX MID BLUE PRINTED DENIM SHORTS - size 34 (currently on sale online)", 
        source: "Steve Madden",
        link: "https://stevemadden.co.za/collections/sm-mens-clothing/products/blake-mid-blue-printed-denim-shirt", 
        image: "images/denim-set.jpeg",
        options: []
    },
    { 
        id: 13, 
        name: "Crocs Echo Black", 
        description: "Crocs Men's Echo Black Clog - size 6.5 (FOUND ON BASH)", 
        source: "Bash",
        link: "https://bash.com/crocs-men-s-echo-black-clog-060601agml0/p", 
        image: "images/crocs.jpeg",
        options: []
    },
    { 
        id: 14, 
        name: "Kapten & Son Lund Pro All Black", 
        description: "LUND PRO ALL BLACK (50% discount available)", 
        source: "Kapten & Son",
        link: "https://kapten-son.co.za/products/lund-pro-all-black", 
        image: "images/kapten-son.jpeg",
        options: []
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Check Firebase connection
    if (!database) {
        console.error('Firebase not initialized');
        showSyncStatus('Error connecting to database', 'error');
        return;
    }

    // Initialize all components
    initSlideshow();
    loadGifts();
    setupRSVP();
    setupImageZoom();
    
    // Show loading status
    showSyncStatus('Loading registry...');
});

// Slideshow functionality
function initSlideshow() {
    const slides = document.querySelectorAll('.slideshow img');
    if (slides.length === 0) return;
    
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
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Load gifts into the page
function loadGifts() {
    const giftGrid = document.getElementById('giftGrid');
    if (!giftGrid) {
        console.error('Gift grid element not found');
        showSyncStatus('Error loading gifts', 'error');
        return;
    }
    
    // Show loading state
    giftGrid.innerHTML = '<div class="loading-gifts">Loading gifts...</div>';
    
    database.ref('selections').on('value', (snapshot) => {
        const selections = snapshot.val() || {};
        
        // Clear loading message
        giftGrid.innerHTML = '';
        
        // Check if gifts array exists
        if (!gifts || gifts.length === 0) {
            giftGrid.innerHTML = '<div class="no-gifts">No gifts found in the registry</div>';
            return;
        }
        
        // Create gift cards
        gifts.forEach(gift => {
            const isSelected = selections[gift.id];
            const selectedBy = isSelected ? selections[gift.id].selectedBy : null;
            const selectedOption = isSelected ? selections[gift.id].option : '';
            
            const giftCard = document.createElement('div');
            giftCard.className = `gift-card ${isSelected ? 'selected' : ''}`;
            giftCard.dataset.id = gift.id;
            
            // Create options HTML if options exist
            const optionsHTML = gift.options && gift.options.length > 0 
                ? gift.options.map(option => `
                    <div class="option">
                        <input type="radio" 
                               id="gift-${gift.id}-${option.value.replace(/\s+/g, '-')}" 
                               name="gift-${gift.id}" 
                               value="${option.value}"
                               ${selectedOption === option.value ? 'checked' : ''}
                               ${isSelected ? 'disabled' : ''}>
                        <label for="gift-${gift.id}-${option.value.replace(/\s+/g, '-')}">
                            ${option.label}: ${option.value}
                        </label>
                    </div>
                `).join('')
                : '';
            
            giftCard.innerHTML = `
                <div class="gift-image-container">
                    <img src="${gift.image}" alt="${gift.name}" 
                         onerror="this.src='images/default-gift.jpg'"
                         loading="lazy"
                         class="${isSelected ? '' : 'loading'}">
                    ${!isSelected ? '<div class="loading-text">Loading image...</div>' : ''}
                </div>
                <div class="gift-content">
                    <h3>${gift.name}</h3>
                    <p>${gift.description}</p>
                    ${gift.source ? `<p class="source">${gift.source}</p>` : ''}
                    ${gift.link && gift.link !== '#' 
                        ? `<a href="${gift.link}" class="view-details" target="_blank">View details →</a>` 
                        : ''}
                    <div class="gift-options">
                        ${optionsHTML}
                        <button class="select-button" data-id="${gift.id}" ${isSelected ? 'disabled' : ''}>
                            ${isSelected ? `<i class="fas fa-check"></i> Selected by ${selectedBy}` : '<i class="far fa-heart"></i> Select This Gift'}
                        </button>
                    </div>
                </div>
            `;
            
            giftGrid.appendChild(giftCard);
            
            // Preload image
            if (!isSelected) {
                const img = new Image();
                img.src = gift.image;
                img.onload = function() {
                    const cardImg = giftCard.querySelector('img');
                    if (cardImg) {
                        cardImg.classList.remove('loading');
                        const loadingText = giftCard.querySelector('.loading-text');
                        if (loadingText) loadingText.remove();
                    }
                };
                img.onerror = function() {
                    const cardImg = giftCard.querySelector('img');
                    if (cardImg) {
                        cardImg.src = 'images/default-gift.jpg';
                        cardImg.classList.remove('loading');
                        const loadingText = giftCard.querySelector('.loading-text');
                        if (loadingText) loadingText.remove();
                    }
                };
            }
        });
        
        // Add event listeners to select buttons
        document.querySelectorAll('.select-button:not(:disabled)').forEach(button => {
            button.addEventListener('click', async function() {
                const giftId = parseInt(this.getAttribute('data-id'));
                const gift = gifts.find(g => g.id === giftId);
                
                // Check if gift is already selected
                const existingSelection = await checkExistingSelection(giftId);
                if (existing
                        // Check if options are required but not selected
                if (gift.options && gift.options.length > 0) {
                    const selectedOption = document.querySelector(`input[name="gift-${giftId}"]:checked`);
                    if (!selectedOption) {
                        showSyncStatus('Please select an option first', 'error');
                        return;
                    }
                }

                // Get user name
                const selectedBy = prompt('Please enter your name to select this gift:');
                if (!selectedBy || selectedBy.trim() === '') {
                    showSyncStatus('Selection cancelled', 'error');
                    return;
                }

                // Prepare selection data
                const selectionData = {
                    selectedBy: selectedBy.trim(),
                    date: new Date().toISOString(),
                    option: gift.options && gift.options.length > 0 
                        ? document.querySelector(`input[name="gift-${giftId}"]:checked`).value 
                        : ''
                };

                // Save to Firebase
                try {
                    await database.ref(`selections/${giftId}`).set(selectionData);
                    showSyncStatus(`${gift.name} selected successfully!`);
                } catch (error) {
                    console.error('Error selecting gift:', error);
                    showSyncStatus('Failed to select gift. Please try again.', 'error');
                }
            });
        });
        
    }, (error) => {
        console.error('Firebase error:', error);
        showSyncStatus('Error loading gifts', 'error');
        const giftGrid = document.getElementById('giftGrid');
        if (giftGrid) {
            giftGrid.innerHTML = '<div class="error">Error loading gifts. Please try again later.</div>';
        }
    });
}

// Check if a gift is already selected
async function checkExistingSelection(giftId) {
    try {
        const snapshot = await database.ref(`selections/${giftId}`).once('value');
        return snapshot.val();
    } catch (error) {
        console.error('Error checking selection:', error);
        return null;
    }
}

// Show selection conflict modal
function showSelectionConflict(gift, selection) {
    const conflictModal = document.createElement('div');
    conflictModal.className = 'conflict-modal';
    conflictModal.innerHTML = `
        <div class="conflict-modal-content">
            <h3><i class="fas fa-exclamation-triangle"></i> Already Selected</h3>
            <p>The "${gift.name}" was selected by ${selection.selectedBy} on ${new Date(selection.date).toLocaleDateString()}.</p>
            <div class="conflict-actions">
                <button class="btn-cancel">OK</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(conflictModal);
    
    // Close modal
    conflictModal.querySelector('.btn-cancel').addEventListener('click', () => {
        conflictModal.remove();
    });
    
    // Close when clicking outside
    conflictModal.addEventListener('click', (e) => {
        if (e.target === conflictModal) {
            conflictModal.remove();
        }
    });
}

// RSVP functionality
function setupRSVP() {
    const rsvpModal = document.getElementById('rsvpModal');
    const closeModal = document.getElementById('closeModal');
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (!rsvpModal || !closeModal || !rsvpForm) {
        console.error('RSVP elements not found');
        return;
    }
    
    // Open modal
    document.getElementById('rsvpButton').addEventListener('click', function(e) {
        e.preventDefault();
        rsvpModal.style.display = 'block';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        rsvpModal.style.display = 'none';
    });
    
    // Close when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === rsvpModal) {
            rsvpModal.style.display = 'none';
        }
    });
    
    // Form submission
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('rsvpName');
        const emailInput = document.getElementById('rsvpEmail');
        const attendanceSelect = document.getElementById('rsvpAttendance');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const attendance = attendanceSelect.value;
        
        // Validate inputs
        if (!name) {
            alert('Please enter your name');
            nameInput.focus();
            return;
        }
        
        if (!email) {
            alert('Please enter your email');
            emailInput.focus();
            return;
        }
        
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }
        
        const rsvpData = {
            name: name,
            email: email,
            attendance: attendance,
            date: new Date().toISOString()
        };
        
        // Save to Firebase
        database.ref('rsvps').push(rsvpData)
            .then(() => {
                showSyncStatus('RSVP submitted successfully!');
                rsvpForm.reset();
                rsvpModal.style.display = 'none';
            })
            .catch((error) => {
                console.error('Error saving RSVP:', error);
                showSyncStatus('Error submitting RSVP. Please try again.', 'error');
            });
    });
}

// Image Zoom Functionality
function setupImageZoom() {
    const zoomModal = document.getElementById('imageZoomModal');
    const zoomedImg = document.getElementById('zoomedImage');
    const closeZoom = document.querySelector('.close-zoom');
    
    if (!zoomModal || !zoomedImg || !closeZoom) return;

    // Click on gift images to zoom
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG' && e.target.closest('.gift-card')) {
            const img = e.target;
            if (img.src) {
                zoomedImg.src = img.src;
                zoomModal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        }
    });

    // Close zoom modal
    closeZoom.addEventListener('click', function() {
        zoomModal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    // Close when clicking outside image
    zoomModal.addEventListener('click', function(e) {
        if (e.target === zoomModal) {
            zoomModal.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && zoomModal.style.display === 'flex') {
            zoomModal.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
}

// Show sync status
function showSyncStatus(message, type = '') {
    const existingStatus = document.querySelector('.sync-status');
    if (existingStatus) {
        existingStatus.remove();
    }
    
    const status = document.createElement('div');
    status.className = `sync-status ${type}`;
    status.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        ${message}
    `;
    document.body.appendChild(status);
    
    // Auto-hide after 3 seconds (unless it's an  error)
    if (type !== 'error') {
        setTimeout(() => {
            status.style.opacity = '0';
            setTimeout(() => status.remove(), 300);
        }, 3000);
    }
}
