 // Gift Data (unchanged from your original)
const gifts = [
    { 
        id: 1, 
        name: "Gold Tempo Watch", 
        description: "Tempo Gold Plated Navy Dial Bracelet Watch (currently on sale online BASH)", 
        source: "Found on BASH",
        link: "https://bash.com/tempo-gold-plated-black-dial-bracelet-watch-05s710abjy8/p", 
        image: "images/watch.jpeg",
        options: []
    },
    { 
        id: 2, 
        name: "Stanley Cup Black", 
        description: "High-quality black Stanley cup 1.18L Tumbler", 
        source: "Found on BASH",
        link: "https://bash.com/stanley-quencher-h2-o-flowstate-black-1-18l-tumbler-130609adjq5/p", 
        image: "images/stanley-cup.jpeg",
        options: []
    },
    { 
        id: 3, 
        name: "Makeup Bag", 
        description: "From Glo Classic Beauty Palour", 
        source: "Glo Classic Beauty on Whatsapp",
        link: "https://wa.me/p/24291791643800921/27633059665", 
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
        image: "images/perfume.jpeg" 
    },
    { 
        id: 7, 
        name: "Factory NBA Set", 
        description: "NBA Track Pant - size Large (Sold Separate)", 
        source: "Found on Cotton On",
        link: "https://cottonon.com/ZA/nba-track-pant/5299813-01.html?dwvar_5299813-01_color=5299813-01&cgid=mens-fleece-bottoms&originalPid=5299813-01#start=7&sz=60", 
        image: "images/nba-set.jpeg" 
    },
     { 
        id: 8, 
        name: "Factory NBA Set", 
        description: "NBA Hoodie - size Large (Sold Separate)",
        source: "Found on Cotton On",
        link: "https://cottonon.com/ZA/nba-hoodie/5299061-15.html?dwvar_5299061-15_color=5299061-15&cgid=&originalPid=5299061-15", 
        image: "images/nba-hoodie.jpeg" 
    },
    { 
        id: 9, 
        name: "Adidas Samba OG", 
        description: "adidas Originals Men's Samba OG Sneaker - size 6",
        source: "Found on Bash",
        link: "https://bash.com/adidas-originals-men-s-samba-og-sneaker-061017aajg4/p", 
        image: "images/samba-shoes.jpeg" 
    },
    { 
        id: 10, 
        name: "Airforce 1 White", 
        description: "White Airforce 1 - size 6 (FOUND ON BASH)",
        source: "Found on Bash",
        link: "https://bash.com/nike-men-s-air-force-1-07-white-sneaker-060601abug4/p?idsku=971910&bash_campaign=20746270549&gad_source=1&gclid=CjwKCAjw47i_BhBTEiwAaJfPpgUstO11TpPxCKLPfoCZRB-Nn1H16TRrfOhCxB4NTKi_eGsoXWJfkRoCs1MQAvD_BwE", 
        image: "images/airforce.jpeg" 
    },
    { 
        id: 11, 
        name: "Steve Madden Leon Cognac Brown", 
        description: "LEON COGNAC LEATHER BROWN - size 8 (currently on sale online)",
        source: "Found on Steven Madden",
        link: "https://stevemadden.co.za/collections/sm-mens-shoes-sandals/products/leon-black-leather", 
        image: "images/steve-madden.jpeg" 
    },
    { 
        id: 12, 
        name: "Steve Madden Leon Cognac Black", 
        description: "LEON COGNAC LEATHER BLACK - size 8 (currently on sale online)", 
        source: "Found on Steven Madden",
        link: "https://stevemadden.co.za/collections/sm-mens-shoes-sandals/products/leon-black-leather", 
        image: "images/steve-madden-black.jpeg" 
    },
    { 
        id: 13, 
        name: "Steve Madden Denim Set", 
        description: "BLAKE MID BLUE PRINTED DENIM SHIRT - Large & ALEX MID BLUE PRINTED DENIM SHORTS - size 34 (currently on sale online)",
        source: "Found on Steven Madden",
        link: "https://stevemadden.co.za/collections/sm-mens-clothing/products/blake-mid-blue-printed-denim-shirt", 
        image: "images/denim-set.jpeg" 
    },
     { 
        id: 14, 
        name: "Steve Madden Denim Set", 
        description: "ALEX MID BLUE PRINTED DENIM SHORTS - size 34 (currently on sale online)",
        source: "Found on Steven Madden",
        link: "https://stevemadden.co.za/products/alex-mid-blue-printed-denim-shorts", 
        image: "images/denim-pants.jpeg" 
    },
    { 
        id: 15, 
        name: "Crocs Echo Black", 
        description: "Crocs Men's Echo Black Clog - size 6.5 (FOUND ON BASH)",
        source: "Found on Bash",
        link: "https://bash.com/crocs-men-s-echo-black-clog-060601agml0/p", 
        image: "images/crocs.jpeg" 
    },
    { 
        id: 16, 
        name: "Kapten & Son Lund Pro All Black", 
        description: "LUND PRO ALL BLACK (50% discount available)",
        source: "Found on Kapten & Son",
        link: "https://kapten-son.co.za/products/lund-pro-all-black", 
        image: "images/kapten-son.jpeg" 
    },
      { 
        id: 17, 
        name: "Straight Leg Jeans", 
        description: "Men's Dark Wash Turn Up Straight Leg Jeans", 
        source: "Found on Bash",
        link: "https://bash.com/men-s-dark-wash-turn-up-straight-leg-jeans-170900aanh3/p", 
        image: "images/denim-jean.jpeg" 
    },
    { 
        id: 18, 
        name: "Denim Waistcoast", 
        description: "Men's Raw Wash Boxy Denim Waistcoat", 
        source: "Found on BASH",
        link: "https://bash.com/men-s-raw-wash-boxy-denim-waistcoat-170900aang6/p", 
        image: "images/denim-waist.jpeg" 
    }
];
// Initialize Firebase
const database = firebase.database();

// Load gifts without showing who selected them
function loadGifts() {
    const giftGrid = document.getElementById('giftGrid');
    giftGrid.innerHTML = '<div class="loading">Loading gifts...</div>';

    database.ref('selections').on('value', (snapshot) => {
        const selections = snapshot.val() || {};
        giftGrid.innerHTML = '';

        gifts.forEach(gift => {
            const isSelected = !!selections[gift.id]; // Just check if selected, don't use name

            const giftCard = document.createElement('div');
            giftCard.className = `gift-card ${isSelected ? 'selected' : ''}`;
            giftCard.dataset.id = gift.id;

            giftCard.innerHTML = `
                <div class="gift-image">
                    <img src="${gift.image}" alt="${gift.name}" loading="lazy">
                </div>
                <div class="gift-details">
                    <h3>${gift.name}</h3>
                    <p>${gift.description}</p>
                    ${gift.source ? `<p class="source">Source: ${gift.source}</p>` : ''}
                    ${gift.link !== '#' ? `<a href="${gift.link}" target="_blank">View Item</a>` : ''}
                    <div class="selection-area">
                        ${isSelected ? 
                            `<div class="selected-msg">✔️ Selected</div>` : // Removed name display
                            `<button class="select-btn" data-id="${gift.id}">Select Gift</button>`
                        }
                    </div>
                </div>
            `;

            giftGrid.appendChild(giftCard);
        });

        // Selection handler (still stores name in Firebase but doesn't display it)
        document.querySelectorAll('.select-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const giftId = this.dataset.id;
                const gift = gifts.find(g => g.id == giftId);
                const userName = prompt(`Select ${gift.name} (your name will be recorded but not displayed):`);
                
                if (userName && userName.trim()) {
                    database.ref(`selections/${giftId}`).set({
                        giftName: gift.name,
                        selectedBy: userName.trim(), // Still stored but not shown
                        selectedAt: new Date().toISOString()
                    });
                }
            });
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
      if (!database) {
        showSyncStatus('Error connecting to database', 'error');
        return;
    }

    initSlideshow();
    loadGifts();
    setupRSVP();
    setupImageZoom();
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
    setInterval(nextSlide, 5000);
}

// Load gifts into the page
function loadGifts() {
    const giftGrid = document.getElementById('giftGrid');
    if (!giftGrid) {
        showSyncStatus('Error loading gifts', 'error');
        return;
    }

    giftGrid.innerHTML = '<div class="loading-gifts">Loading gifts...</div>';

    database.ref('selections').on('value', (snapshot) => {
    const selections = snapshot.val() || {};
    giftGrid.innerHTML = '';

    if (!gifts || gifts.length === 0) {
        giftGrid.innerHTML = '<div class="no-gifts">No gifts found in the registry</div>';
        return;
    }

    gifts.forEach(gift => {
        const isSelected = selections[gift.id];
        const selectedGiftName = isSelected ? selections[gift.id].giftName : '';

        const giftCard = document.createElement('div');
        giftCard.className = `gift-card ${isSelected ? 'selected' : ''}`;
        giftCard.dataset.id = gift.id;

        giftCard.innerHTML = `
            <div class="gift-image">
                <img src="${gift.imageUrl}" alt="${gift.name}">
            </div>
            <div class="gift-details">
                <h3>${gift.name}</h3>
                <p>${gift.description}</p>
                <div class="gift-selection">
                    ${!isSelected ? `
                        <button class="select-gift" data-gift-id="${gift.id}" data-gift-name="${gift.name}">
                            Select This Gift
                        </button>
                    ` : `
                        <div class="selected-message">
                            ✔️ ${selectedGiftName} has been selected!
                        </div>
                    `}
                </div>
            </div>
        `;

        giftGrid.appendChild(giftCard);
    });

    // Add event listeners to the new buttons
    document.querySelectorAll('.select-gift').forEach(button => {
        button.addEventListener('click', (e) => {
            const giftId = e.target.dataset.giftId;
            const giftName = e.target.dataset.giftName;
            
            // Save to Firebase
            database.ref('selections/' + giftId).set({
                giftName: giftName,
                selectedAt: new Date().toISOString()
            });
        });
    });
});

            giftCard.innerHTML = `
                <div class="gift-image-container">
                    <img src="${gift.image}" alt="${gift.name}" 
                         onerror="this.src='images/default-gift.jpg'"
                         loading="lazy">
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
                            ${isSelected ? `<i class="fas fa-check"></i> Selected` : '<i class="far fa-heart"></i> Select This Gift'}
                        </button>
                    </div>
                </div>
            `;

            giftGrid.appendChild(giftCard);

            if (!isSelected) {
                preloadImage(gift.image, giftCard);
            }
        });

        document.querySelectorAll('.select-button:not(:disabled)').forEach(button => {
            button.addEventListener('click', async function() {
                const giftId = parseInt(this.getAttribute('data-id'));
                const gift = gifts.find(g => g.id === giftId);

                if (gift.options?.length > 0) {
                    const selectedOption = document.querySelector(`input[name="gift-${giftId}"]:checked`);
                    if (!selectedOption) {
                        showSyncStatus('Please select an option first', 'error');
                        return;
                    }
                }

                const selectedBy = prompt('Please enter your name to select this gift:');
                if (!selectedBy?.trim()) {
                    showSyncStatus('Selection cancelled', 'error');
                    return;
                }

                const selectionData = {
                    selectedBy: selectedBy.trim(),
                    date: new Date().toISOString(),
                    option: gift.options?.length 
                        ? document.querySelector(`input[name="gift-${giftId}"]:checked`).value 
                        : ''
                };

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
        giftGrid.innerHTML = '<div class="error">Error loading gifts. Please try again later.</div>';
    });
}

// Preload image
function preloadImage(src, giftCard) {
    const img = new Image();
    img.src = src;
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

// Show sync status
function showSyncStatus(message, type = '') {
    const existingStatus = document.querySelector('.sync-status');
    if (existingStatus) existingStatus.remove();

    const status = document.createElement('div');
    status.className = `sync-status ${type}`;
    status.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        ${message}
    `;
    document.body.appendChild(status);

    if (type !== 'error') {
        setTimeout(() => {
            status.style.opacity = '0';
            setTimeout(() => status.remove(), 300);
        }, 3000);
    }
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

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slideshow img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Automatically transition slides every 5 seconds
    setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
    const rsvpButton = document.getElementById('rsvpButton');
    const rsvpModal = document.getElementById('rsvpModal');
    const closeModal = document.getElementById('closeModal');

    if (rsvpButton && rsvpModal) {
        rsvpButton.addEventListener('click', function (e) {
            e.preventDefault();
            rsvpModal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function () {
            rsvpModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function (e) {
        if (e.target === rsvpModal) {
            rsvpModal.style.display = 'none';
        }
    });
});
    // ... (keep your existing slideshow/RSVP initialization code)
});
