document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('dashboard-stats')) return;

    const data = window.getStoreData();
    const stats = data.stats;

    document.getElementById('stat-total-apt').textContent = stats.totalAppointments;
    document.getElementById('stat-today-apt').textContent = stats.todayAppointments;
    document.getElementById('stat-total-doc').textContent = stats.totalDoctors;
    document.getElementById('stat-pending-req').textContent = stats.pendingRequests;

    renderRecentAppointments();
});

function renderRecentAppointments() {
    const tbody = document.getElementById('recent-appointments-body');
    if(!tbody) return;
    const data = window.getStoreData();
    
    tbody.innerHTML = '';
    const recent = data.appointments.slice(0, 5);
    
    recent.forEach(apt => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${apt.id}</strong></td>
            <td>${apt.patient}</td>
            <td>${apt.doctor}</td>
            <td>${apt.date} at ${apt.time}</td>
            <td><span class="status-badge status-${apt.status.toLowerCase()}">${apt.status}</span></td>
            <td><a href="pages/appointments.html" class="btn btn-outline" style="padding: 4px 8px; font-size: 12px;"><i data-lucide="eye" style="width:14px;height:14px;"></i></a></td>
        `;
        tbody.appendChild(tr);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}
