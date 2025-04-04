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
    // Add all 14 gifts here following the same structure
    // ...
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
