// Admin Configuration
let isAdmin = false;
const ADMIN_PASSWORD = "nicky123"; // In production, use Firebase Auth

// Initialize Admin Functionality
document.addEventListener('DOMContentLoaded', function() {
    setupAdminToggle();
    setupPasswordModal();
    setupAdminButtons();
});

// Admin Toggle Button
function setupAdminToggle() {
    const adminToggle = document.getElementById('adminToggle');
    if (!adminToggle) return;

    adminToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isAdmin) {
            closeAdminPanel();
        } else {
            showPasswordModal();
        }
    });
}

// Password Modal
function setupPasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    const passwordForm = document.getElementById('passwordForm');
    
    if (!passwordModal || !passwordForm) return;

    // Close when clicking outside modal
    passwordModal.addEventListener('click', function(e) {
        if (e.target === passwordModal) {
            closePasswordModal();
        }
    });

    // Form submission
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('adminPassword').value.trim();
        
        if (password === ADMIN_PASSWORD) {
            isAdmin = true;
            closePasswordModal();
            openAdminPanel();
            updateAdminTables();
        } else {
            alert('Incorrect password. Please try again.');
            document.getElementById('adminPassword').value = '';
        }
    });
}

// Admin Panel Functions
function openAdminPanel() {
    const adminSection = document.getElementById('adminSection');
    if (adminSection) {
        adminSection.style.display = 'block';
    }
}

function closeAdminPanel() {
    const adminSection = document.getElementById('adminSection');
    if (adminSection) {
        adminSection.style.display = 'none';
    }
    isAdmin = false;
}

function showPasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    if (passwordModal) {
        passwordModal.style.display = 'flex';
        document.getElementById('adminPassword').focus();
    }
}

function closePasswordModal() {
    const passwordModal = document.getElementById('passwordModal');
    if (passwordModal) {
        passwordModal.style.display = 'none';
        document.getElementById('adminPassword').value = '';
    }
}

// Admin Buttons Functionality
function setupAdminButtons() {
    // Export RSVPs
    const exportRSVPBtn = document.getElementById('exportRSVPBtn');
    if (exportRSVPBtn) {
        exportRSVPBtn.addEventListener('click', exportRSVPs);
    }

    // Export Gift Selections
    const exportGiftsBtn = document.getElementById('exportGiftsBtn');
    if (exportGiftsBtn) {
        exportGiftsBtn.addEventListener('click', exportGiftSelections);
    }
}

// Update Admin Tables with current selections
function updateAdminTables() {
    if (!isAdmin) return;

    const selectionsBody = document.getElementById('selectionsBody');
    if (!selectionsBody) return;

    selectionsBody.innerHTML = '<tr><td colspan="4" class="loading">Loading selections...</td></tr>';

    database.ref('selections').once('value').then((snapshot) => {
        const selections = snapshot.val() || {};
        
        if (Object.keys(selections).length === 0) {
            selectionsBody.innerHTML = '<tr><td colspan="4" class="no-selections">No gifts have been selected yet</td></tr>';
            return;
        }

        selectionsBody.innerHTML = '';

        Object.entries(selections).forEach(([giftId, selection]) => {
            const gift = gifts.find(g => g.id == giftId);
            
            if (gift) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${gift.name}</td>
                    <td>${selection.selectedBy || 'Guest'}</td>
                    <td>${new Date(selection.date).toLocaleDateString()} ${new Date(selection.date).toLocaleTimeString()}</td>
                    <td>
                        <button class="unselect-button" data-id="${giftId}">
                            <i class="fas fa-trash-alt"></i> Remove
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
                if (confirm(`Are you sure you want to remove the selection for ${gifts.find(g => g.id == giftId)?.name || 'this gift'}?`)) {
                    database.ref(`selections/${giftId}`).remove()
                        .then(() => {
                            showSyncStatus('Gift selection removed');
                            updateAdminTables();
                        })
                        .catch(error => {
                            console.error('Error removing selection:', error);
                            showSyncStatus('Error removing selection', 'error');
                        });
                }
            });
        });

    }).catch(error => {
        console.error('Error loading selections:', error);
        selectionsBody.innerHTML = '<tr><td colspan="4" class="error">Error loading selections</td></tr>';
    });
}

// Export RSVPs as CSV
function exportRSVPs() {
    if (!isAdmin) return;

    showSyncStatus('Preparing RSVP export...');
    
    database.ref('rsvps').once('value').then((snapshot) => {
        const rsvps = snapshot.val() || {};
        let csv = 'Name,Email,Attendance,Date\n';
        
        Object.values(rsvps).forEach(rsvp => {
            csv += `"${rsvp.name || ''}","${rsvp.email || ''}","${rsvp.attendance || ''}","${rsvp.date || ''}"\n`;
        });
        
        downloadCSV(csv, 'nicky-birthday-rsvps.csv');
        showSyncStatus('RSVPs exported successfully!');

    }).catch(error => {
        console.error('Error exporting RSVPs:', error);
        showSyncStatus('Error exporting RSVPs', 'error');
    });
}

// Export Gift Selections as CSV
function exportGiftSelections() {
    if (!isAdmin) return;

    showSyncStatus('Preparing gift selections export...');
    
    database.ref('selections').once('value').then((snapshot) => {
        const selections = snapshot.val() || {};
        let csv = 'Gift Name,Selected By,Option,Date\n';
        
        Object.entries(selections).forEach(([giftId, selection]) => {
            const gift = gifts.find(g => g.id == giftId);
            if (gift) {
                csv += `"${gift.name || ''}","${selection.selectedBy || ''}","${selection.option || ''}","${selection.date || ''}"\n`;
            }
        });
        
        downloadCSV(csv, 'nicky-birthday-gift-selections.csv');
        showSyncStatus('Gift selections exported successfully!');

    }).catch(error => {
        console.error('Error exporting gift selections:', error);
        showSyncStatus('Error exporting gift selections', 'error');
    });
}

// Helper function to download CSV
function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Close admin panel when clicking outside
document.addEventListener('click', function(e) {
    const adminSection = document.getElementById('adminSection');
    const adminToggle = document.getElementById('adminToggle');
    
    if (isAdmin && adminSection && !adminSection.contains(e.target) && 
        e.target !== adminToggle && !adminToggle.contains(e.target)) {
        closeAdminPanel();
    }
});
