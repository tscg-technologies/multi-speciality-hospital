document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('doctors-grid')) return;
    renderDoctors();
});

function renderDoctors() {
    const grid = document.getElementById('doctors-grid');
    const data = window.getStoreData();
    
    grid.innerHTML = '';
    data.doctors.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'card doctor-card';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'center';
        card.style.textAlign = 'center';
        card.style.gap = '12px';

        card.innerHTML = `
            <div style="width: 80px; height: 80px; border-radius: 50%; background-color: var(--pale-mint); display: flex; align-items: center; justify-content: center; color: var(--medical-teal); font-size: 32px; font-weight: bold;">
                ${doc.name.split(' ').map(n => n[0]).join('').replace('D.', 'D')}
            </div>
            <div>
                <h3 style="margin: 0; font-size: 16px;">${doc.name}</h3>
                <p style="margin: 4px 0 0; color: var(--text-secondary); font-size: 13px;">${doc.specialty}</p>
                <p style="margin: 4px 0 0; color: var(--text-secondary); font-size: 12px; display:flex; align-items:center; justify-content:center; gap:4px;"><i data-lucide="map-pin" style="width:12px;height:12px;"></i> ${doc.branch}</p>
            </div>
            <div style="margin-top: 8px;">
                <span class="status-badge status-${doc.status.toLowerCase() === 'active' ? 'completed' : 'cancelled'}">${doc.status}</span>
            </div>
            <div style="margin-top: 16px; display: flex; gap: 8px; width: 100%;">
                <button class="btn btn-outline" style="flex: 1;" onclick="editDoctor('${doc.id}')">Edit</button>
                <button class="btn btn-outline" style="flex: 1; color: var(--danger); border-color: var(--danger);" onclick="deleteDoctor('${doc.id}')">Delete</button>
            </div>
        `;
        grid.appendChild(card);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.editDoctor = function(id) {
    alert("Edit form for " + id + " would open here.");
};

window.deleteDoctor = function(id) {
    if(confirm('Are you sure you want to delete this doctor?')) {
        const data = window.getStoreData();
        data.doctors = data.doctors.filter(d => d.id !== id);
        window.saveStoreData(data);
        renderDoctors();
        // Update stats
        data.stats.totalDoctors = data.doctors.length;
        window.saveStoreData(data);
    }
};
