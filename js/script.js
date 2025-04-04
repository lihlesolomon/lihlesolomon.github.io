let isAdmin = false;

// Admin toggle
document.getElementById('adminToggle').addEventListener('click', function() {
    if (isAdmin) {
        // Hide admin section
        document.getElementById('adminSection').style.display = 'none';
        isAdmin = false;
    } else {
        // Show password modal
        document.getElementById('passwordModal').style.display = 'block';
    }
});

// Password form
document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;
    
    // In production, use Firebase Auth
    if (password === "nicky123") {
        isAdmin = true;
        document.getElementById('passwordModal').style.display = 'none';
        document.getElementById('adminSection').style.display = 'block';
        document.getElementById('adminPassword').value = '';
        updateAdminTables();
    } else {
        alert('Incorrect password');
    }
});

// Update admin tables
function updateAdminTables() {
    if (!isAdmin) return;
    
    const selectionsBody = document.getElementById('selectionsBody');
    selectionsBody.innerHTML = '';
    
    database.ref('selections').once('value').then((snapshot) => {
        const selections = snapshot.val() || {};
        
        Object.keys(selections).forEach(giftId => {
            const selection = selections[giftId];
            const gift = gifts.find(g => g.id == giftId);
            
            if (gift) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${gift.name}</td>
                    <td>${selection.selectedBy}</td>
                    <td>${new Date(selection.date).toLocaleString()}</td>
                    <td>
                        <button class="unselect-button" data-id="${giftId}">
                            Unselect
                        </button>
                    </td>
                `;
                selectionsBody.appendChild(row);
            }
        });
        
        // Add event listeners to unselect buttons
        document.querySelectorAll('.unselect-button').forEach(button => {
            button.addEventListener('click', function() {
                const giftId = this.getAttribute('data-id');
                if (confirm('Are you sure you want to unselect this gift?')) {
                    database.ref(`selections/${giftId}`).remove()
                        .then(() => {
                            showSyncStatus('Gift unselected');
                            updateAdminTables();
                        });
                }
            });
        });
    });
}

// Export RSVPs
document.getElementById('exportRSVPBtn').addEventListener('click', function() {
    database.ref('rsvps').once('value').then((snapshot) => {
        const rsvps = snapshot.val() || {};
        let csv = 'Name,Email,Attendance,Date\n';
        
        Object.values(rsvps).forEach(rsvp => {
            csv += `"${rsvp.name}","${rsvp.email}","${rsvp.attendance}","${rsvp.date}"\n`;
        });
        
        downloadCSV(csv, 'rsvps.csv');
        showSyncStatus('RSVPs exported successfully!');
    });
});

// Export gift selections
document.getElementById('exportGiftsBtn').addEventListener('click', function() {
    database.ref('selections').once('value').then((snapshot) => {
        const selections = snapshot.val() || {};
        let csv = 'Gift,Selected By,Option,Date\n';
        
        Object.keys(selections).forEach(giftId => {
            const selection = selections[giftId];
            const gift = gifts.find(g => g.id == giftId);
            
            if (gift) {
                csv += `"${gift.name}","${selection.selectedBy}","${selection.option || ''}","${selection.date}"\n`;
            }
        });
        
        downloadCSV(csv, 'gift-selections.csv');
        showSyncStatus('Gift selections exported successfully!');
    });
});

// Helper function to download CSV
function downloadCSV(csv, filename) {
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
