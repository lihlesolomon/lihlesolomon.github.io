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

// Load gifts into the page
function loadGifts() {
    const giftGrid = document.getElementById('giftGrid');
    giftGrid.innerHTML = '';
    
    // Get selections from Firebase
    database.ref('selections').on('value', (snapshot) => {
        const selections = snapshot.val() || {};
        
        gifts.forEach(gift => {
            const isSelected = selections[gift.id];
            const selectedBy = isSelected ? selections[gift.id].selectedBy : null;
            
            const giftCard = document.createElement('div');
            giftCard.className = `gift-card ${isSelected ? 'selected' : ''}`;
            giftCard.innerHTML = `
                <img src="${gift.image}" alt="${gift.name}">
                <h3>${gift.name}</h3>
                <p>${gift.description}</p>
                <p class="source">${gift.source}</p>
                <a href="${gift.link}" class="view-details" target="_blank">View details →</a>
                <div class="gift-options">
                    ${gift.options.map(option => `
                        <div>
                            <input type="radio" id="gift-${gift.id}-${option.value.replace(/\s+/g, '-')}" 
                                   name="gift-${gift.id}" value="${option.value}">
                            <label for="gift-${gift.id}-${option.value.replace(/\s+/g, '-')}">
                                ${option.label}: ${option.value}
                            </label>
                        </div>
                    `).join('')}
                    <button class="select-button" data-id="${gift.id}" ${isSelected ? 'disabled' : ''}>
                        ${isSelected ? `Selected by ${selectedBy}` : 'Select This Gift'}
                    </button>
                </div>
            `;
            giftGrid.appendChild(giftCard);
        });
        
        // Add event listeners to select buttons
        document.querySelectorAll('.select-button').forEach(button => {
            button.addEventListener('click', function() {
                const giftId = this.getAttribute('data-id');
                const selectedOption = document.querySelector(`input[name="gift-${giftId}"]:checked`);
                
                if (!selectedOption) {
                    alert('Please select an option first');
                    return;
                }
                
                const selectedBy = prompt('Please enter your name:');
                if (selectedBy) {
                    database.ref(`selections/${giftId}`).set({
                        selectedBy: selectedBy,
                        date: new Date().toISOString(),
                        option: selectedOption.value
                    }).then(() => {
                        showSyncStatus('Gift selected successfully!');
                    });
                }
            });
        });
    });
}

// RSVP functionality
document.getElementById('rsvpButton').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('rsvpModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('rsvpModal').style.display = 'none';
});

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const rsvpData = {
        name: document.getElementById('rsvpName').value,
        email: document.getElementById('rsvpEmail').value,
        attendance: document.getElementById('rsvpAttendance').value,
        date: new Date().toISOString()
    };
    
    database.ref('rsvps').push(rsvpData)
        .then(() => {
            showSyncStatus('RSVP submitted successfully!');
            document.getElementById('rsvpForm').reset();
            document.getElementById('rsvpModal').style.display = 'none';
        });
});

// Show sync status
function showSyncStatus(message) {
    const status = document.createElement('div');
    status.className = 'sync-status';
    status.textContent = message;
    document.body.appendChild(status);
    
    setTimeout(() => {
        status.remove();
    }, 3000);
}

// Initialize the page
window.addEventListener('DOMContentLoaded', loadGifts);
