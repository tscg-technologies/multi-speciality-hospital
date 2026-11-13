import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')

css_admin = """
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700&display=swap');

:root {
    --deep-navy: #123047;
    --medical-teal: #138C88;
    --pale-mint: #E9F6F3;
    --white: #FFFFFF;
    --main-bg: #F5F8FA;
    --text-primary: #243746;
    --text-secondary: #687985;
    --border-color: #E1EAE8;
    --success: #28a745;
    --warning: #ffc107;
    --danger: #dc3545;
    
    --sidebar-width: 260px;
    --header-height: 70px;
    
    --font-heading: 'Manrope', sans-serif;
    --font-body: 'Inter', sans-serif;
    
    --shadow-sm: 0 1px 3px rgba(18, 48, 71, 0.05);
    --shadow-md: 0 4px 6px rgba(18, 48, 71, 0.07);
    --radius-md: 8px;
    --radius-lg: 12px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    color: var(--text-primary);
    background-color: var(--main-bg);
    line-height: 1.5;
    font-size: 14px;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--deep-navy);
}

a {
    text-decoration: none;
    color: inherit;
}

/* Layout */
.app-container {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: var(--sidebar-width);
    background-color: var(--white);
    border-right: 1px solid var(--border-color);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.sidebar-brand {
    height: var(--header-height);
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-bottom: 1px solid var(--border-color);
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 700;
    color: var(--deep-navy);
    gap: 12px;
}
.sidebar-brand i {
    color: var(--medical-teal);
    font-size: 24px;
}

.sidebar-nav {
    padding: 16px 0;
    flex: 1;
    overflow-y: auto;
}

.nav-item {
    display: flex;
    align-items: center;
    padding: 12px 24px;
    color: var(--text-secondary);
    font-weight: 500;
    gap: 12px;
    transition: all 0.2s;
}

.nav-item i {
    font-size: 18px;
    width: 24px;
    text-align: center;
}

.nav-item:hover, .nav-item.active {
    background-color: var(--pale-mint);
    color: var(--medical-teal);
}
.nav-item.active {
    border-right: 3px solid var(--medical-teal);
}

.main-wrapper {
    flex: 1;
    margin-left: var(--sidebar-width);
    display: flex;
    flex-direction: column;
}

.top-header {
    height: var(--header-height);
    background-color: var(--white);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    position: sticky;
    top: 0;
    z-index: 90;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.page-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.header-icon {
    position: relative;
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 20px;
}
.header-icon .badge {
    position: absolute;
    top: -6px;
    right: -8px;
    background-color: var(--danger);
    color: var(--white);
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 10px;
    font-weight: bold;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--pale-mint);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--medical-teal);
    font-weight: 600;
    border: 1px solid var(--border-color);
}

.user-info {
    display: flex;
    flex-direction: column;
}
.user-name {
    font-weight: 600;
    font-size: 14px;
}
.user-role {
    font-size: 12px;
    color: var(--text-secondary);
}

.main-content {
    padding: 32px;
    flex: 1;
}

.section-header {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
"""

css_components = """
/* Cards */
.card {
    background-color: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    padding: 24px;
}

.summary-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
}

.summary-card {
    display: flex;
    align-items: center;
    gap: 16px;
}
.summary-icon {
    width: 56px;
    height: 56px;
    border-radius: var(--radius-md);
    background-color: var(--pale-mint);
    color: var(--medical-teal);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
.summary-details h3 {
    font-size: 28px;
    margin: 0;
    color: var(--deep-navy);
}
.summary-details p {
    color: var(--text-secondary);
    margin: 0;
    font-size: 14px;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: var(--radius-md);
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
    font-family: var(--font-body);
}

.btn-primary {
    background-color: var(--medical-teal);
    color: var(--white);
}
.btn-primary:hover {
    background-color: #0f7572;
}

.btn-outline {
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-primary);
}
.btn-outline:hover {
    background-color: var(--main-bg);
}

.btn-danger {
    background-color: var(--danger);
    color: var(--white);
}

/* Tables */
.table-container {
    overflow-x: auto;
    width: 100%;
}
.data-table {
    width: 100%;
    border-collapse: collapse;
}
.data-table th, .data-table td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
}
.data-table th {
    background-color: var(--main-bg);
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.data-table tbody tr:hover {
    background-color: #f9fbfc;
}

/* Badges */
.status-badge {
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    display: inline-block;
}
.status-pending { background-color: #fff3cd; color: #856404; }
.status-confirmed { background-color: #d4edda; color: #155724; }
.status-completed { background-color: var(--pale-mint); color: var(--medical-teal); }
.status-cancelled { background-color: #f8d7da; color: #721c24; }

/* Forms */
.form-group {
    margin-bottom: 20px;
}
.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-primary);
}
.form-control {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    font-family: var(--font-body);
    font-size: 14px;
    transition: border-color 0.2s;
}
.form-control:focus {
    outline: none;
    border-color: var(--medical-teal);
}

/* Modals */
.modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(18, 48, 71, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}
.modal-overlay.active {
    opacity: 1;
    pointer-events: auto;
}
.modal-content {
    background-color: var(--white);
    border-radius: var(--radius-lg);
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    transform: translateY(20px);
    transition: transform 0.3s;
}
.modal-overlay.active .modal-content {
    transform: translateY(0);
}
.modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-body {
    padding: 24px;
}
.modal-footer {
    padding: 20px 24px;
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}
.close-modal {
    cursor: pointer;
    font-size: 20px;
    color: var(--text-secondary);
}

/* Filters */
.filters-bar {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    align-items: center;
    flex-wrap: wrap;
}
"""

css_responsive = """
@media (max-width: 1024px) {
    .sidebar {
        transform: translateX(-100%);
    }
    .sidebar.active {
        transform: translateX(0);
    }
    .main-wrapper {
        margin-left: 0;
    }
    .sidebar-toggle {
        display: block !important;
    }
    
    .summary-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .summary-cards {
        grid-template-columns: 1fr;
    }
    
    .top-header {
        padding: 0 16px;
    }
    
    .main-content {
        padding: 16px;
    }
    
    .filters-bar {
        flex-direction: column;
        align-items: stretch;
    }
    
    .page-title {
        font-size: 18px;
    }
}

.sidebar-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--deep-navy);
}

/* Grid layout for Dashboard */
.dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
}
@media (max-width: 1024px) {
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
}
"""

js_data = """
const DEMO_DATA = {
    appointments: [
        { id: 'APT-1001', patient: 'John Doe', doctor: 'Dr. Sarah Smith', specialty: 'Cardiology', date: '2026-10-10', time: '10:00 AM', branch: 'Main City', status: 'Confirmed' },
        { id: 'APT-1002', patient: 'Jane Smith', doctor: 'Dr. Mike Johnson', specialty: 'Neurology', date: '2026-10-10', time: '11:30 AM', branch: 'Westside', status: 'Pending' },
        { id: 'APT-1003', patient: 'Robert Brown', doctor: 'Dr. Emily Davis', specialty: 'Orthopedics', date: '2026-10-09', time: '09:00 AM', branch: 'Main City', status: 'Completed' },
        { id: 'APT-1004', patient: 'Mary Johnson', doctor: 'Dr. Sarah Smith', specialty: 'Cardiology', date: '2026-10-11', time: '02:00 PM', branch: 'Main City', status: 'Cancelled' }
    ],
    doctors: [
        { id: 'DOC-001', name: 'Dr. Sarah Smith', specialty: 'Cardiology', branch: 'Main City', status: 'Active' },
        { id: 'DOC-002', name: 'Dr. Mike Johnson', specialty: 'Neurology', branch: 'Westside', status: 'Active' },
        { id: 'DOC-003', name: 'Dr. Emily Davis', specialty: 'Orthopedics', branch: 'Main City', status: 'Inactive' }
    ],
    departments: [
        { id: 'DEP-1', name: 'Cardiology', head: 'Dr. Sarah Smith', status: 'Active' },
        { id: 'DEP-2', name: 'Neurology', head: 'Dr. Mike Johnson', status: 'Active' },
        { id: 'DEP-3', name: 'Orthopedics', head: 'Dr. Emily Davis', status: 'Active' }
    ],
    stats: {
        totalAppointments: 1254,
        todayAppointments: 42,
        totalDoctors: 48,
        totalDepartments: 12,
        pendingRequests: 15,
        activeLocations: 3
    }
};

if (!localStorage.getItem('aurevia_data')) {
    localStorage.setItem('aurevia_data', JSON.stringify(DEMO_DATA));
}

window.getStoreData = function() {
    return JSON.parse(localStorage.getItem('aurevia_data'));
};

window.saveStoreData = function(data) {
    localStorage.setItem('aurevia_data', JSON.stringify(data));
};

window.resetDemoData = function() {
    localStorage.setItem('aurevia_data', JSON.stringify(DEMO_DATA));
    location.reload();
};
"""

js_layout = """
document.addEventListener('DOMContentLoaded', () => {
    // Render Sidebar
    const sidebarHTML = `
        <div class="sidebar-brand">
            <i class="fa-solid fa-hospital"></i>
            Aurevia Admin
        </div>
        <div class="sidebar-nav">
            <a href="${getRelativePath('')}index.html" class="nav-item ${isActive('index.html')}"><i class="fa-solid fa-chart-pie"></i> Dashboard</a>
            <a href="${getRelativePath('pages/')}appointments.html" class="nav-item ${isActive('appointments.html')}"><i class="fa-regular fa-calendar-check"></i> Appointments</a>
            <a href="${getRelativePath('pages/')}doctors.html" class="nav-item ${isActive('doctors.html')}"><i class="fa-solid fa-user-doctor"></i> Doctors</a>
            <a href="${getRelativePath('pages/')}staff.html" class="nav-item ${isActive('staff.html')}"><i class="fa-solid fa-users"></i> Staff</a>
            <a href="${getRelativePath('pages/')}departments.html" class="nav-item ${isActive('departments.html')}"><i class="fa-solid fa-sitemap"></i> Departments</a>
            <a href="${getRelativePath('pages/')}locations.html" class="nav-item ${isActive('locations.html')}"><i class="fa-solid fa-building"></i> Locations</a>
            <a href="${getRelativePath('pages/')}services.html" class="nav-item ${isActive('services.html')}"><i class="fa-solid fa-stethoscope"></i> Services</a>
            <a href="${getRelativePath('pages/')}packages.html" class="nav-item ${isActive('packages.html')}"><i class="fa-solid fa-box-open"></i> Health Packages</a>
            <a href="${getRelativePath('pages/')}resources.html" class="nav-item ${isActive('resources.html')}"><i class="fa-solid fa-book-medical"></i> Resources</a>
            <a href="${getRelativePath('pages/')}testimonials.html" class="nav-item ${isActive('testimonials.html')}"><i class="fa-regular fa-star"></i> Testimonials</a>
            <a href="${getRelativePath('pages/')}content.html" class="nav-item ${isActive('content.html')}"><i class="fa-solid fa-pen-to-square"></i> Web Content</a>
            <a href="${getRelativePath('pages/')}analytics.html" class="nav-item ${isActive('analytics.html')}"><i class="fa-solid fa-chart-line"></i> Analytics</a>
            <a href="${getRelativePath('pages/')}settings.html" class="nav-item ${isActive('settings.html')}"><i class="fa-solid fa-gear"></i> Settings</a>
        </div>
    `;
    const sidebar = document.getElementById('sidebar');
    if(sidebar) sidebar.innerHTML = sidebarHTML;

    // Render Header
    const pageTitle = document.title.split('-')[0].trim();
    const headerHTML = `
        <div class="header-left">
            <i class="fa-solid fa-bars sidebar-toggle" id="sidebarToggle"></i>
            <h1 class="page-title">${pageTitle}</h1>
        </div>
        <div class="header-right">
            <a href="../index.html" target="_blank" class="btn btn-outline"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Site</a>
            <div class="header-icon">
                <i class="fa-regular fa-bell"></i>
                <span class="badge">3</span>
            </div>
            <div class="user-profile">
                <div class="user-avatar">AD</div>
                <div class="user-info">
                    <span class="user-name">Admin User</span>
                    <span class="user-role">Super Admin</span>
                </div>
            </div>
        </div>
    `;
    const header = document.getElementById('topHeader');
    if(header) header.innerHTML = headerHTML;

    // Toggle Sidebar
    const sidebarToggle = document.getElementById('sidebarToggle');
    if(sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Modal close handlers
    document.querySelectorAll('.close-modal, .btn-cancel').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if(modal) modal.classList.remove('active');
        });
    });
});

function getRelativePath(folder) {
    const isPages = window.location.pathname.includes('/pages/');
    if(isPages && folder === '') return '../';
    if(isPages && folder === 'pages/') return '';
    return folder;
}

function isActive(page) {
    return window.location.pathname.includes(page) ? 'active' : '';
}

function showModal(id) {
    const modal = document.getElementById(id);
    if(modal) modal.classList.add('active');
}
function hideModal(id) {
    const modal = document.getElementById(id);
    if(modal) modal.classList.remove('active');
}
"""

js_dashboard = """
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
            <td><button class="btn btn-outline" style="padding: 4px 8px; font-size: 12px;">View</button></td>
        `;
        tbody.appendChild(tr);
    });
}
"""

js_appointments = """
document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('appointments-table-body')) return;
    renderAppointments();

    document.getElementById('addAptBtn').addEventListener('click', () => {
        document.getElementById('aptForm').reset();
        document.getElementById('aptId').value = '';
        showModal('appointmentModal');
    });

    document.getElementById('aptForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveAppointment();
    });
});

function renderAppointments() {
    const tbody = document.getElementById('appointments-table-body');
    const data = window.getStoreData();
    
    tbody.innerHTML = '';
    data.appointments.forEach(apt => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${apt.id}</strong></td>
            <td>${apt.patient}</td>
            <td>${apt.doctor}</td>
            <td>${apt.specialty}</td>
            <td>${apt.date} ${apt.time}</td>
            <td><span class="status-badge status-${apt.status.toLowerCase()}">${apt.status}</span></td>
            <td>
                <button class="btn btn-outline" onclick="editApt('${apt.id}')" style="padding: 4px 8px; font-size: 12px;"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteApt('${apt.id}')" style="padding: 4px 8px; font-size: 12px;"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.editApt = function(id) {
    const data = window.getStoreData();
    const apt = data.appointments.find(a => a.id === id);
    if(apt) {
        document.getElementById('aptId').value = apt.id;
        document.getElementById('patientName').value = apt.patient;
        document.getElementById('doctorName').value = apt.doctor;
        document.getElementById('aptDate').value = apt.date;
        document.getElementById('aptTime').value = apt.time;
        document.getElementById('aptStatus').value = apt.status;
        showModal('appointmentModal');
    }
};

window.deleteApt = function(id) {
    if(confirm('Are you sure you want to delete this appointment?')) {
        const data = window.getStoreData();
        data.appointments = data.appointments.filter(a => a.id !== id);
        window.saveStoreData(data);
        renderAppointments();
    }
};

function saveAppointment() {
    const data = window.getStoreData();
    const id = document.getElementById('aptId').value;
    
    const apt = {
        patient: document.getElementById('patientName').value,
        doctor: document.getElementById('doctorName').value,
        specialty: 'General', // simplified
        date: document.getElementById('aptDate').value,
        time: document.getElementById('aptTime').value,
        branch: 'Main City', // simplified
        status: document.getElementById('aptStatus').value
    };

    if(id) {
        // update
        const idx = data.appointments.findIndex(a => a.id === id);
        apt.id = id;
        data.appointments[idx] = apt;
    } else {
        // create
        apt.id = 'APT-' + Math.floor(Math.random() * 10000);
        data.appointments.unshift(apt);
    }
    
    window.saveStoreData(data);
    hideModal('appointmentModal');
    renderAppointments();
}
"""

html_dashboard = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Aurevia Admin</title>
    <link rel="stylesheet" href="assets/css/admin.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="app-container">
        <aside class="sidebar" id="sidebar"></aside>
        
        <main class="main-wrapper">
            <header class="top-header" id="topHeader"></header>
            
            <div class="main-content" id="dashboard-stats">
                <div class="summary-cards">
                    <div class="card summary-card">
                        <div class="summary-icon"><i class="fa-regular fa-calendar-check"></i></div>
                        <div class="summary-details">
                            <h3 id="stat-total-apt">0</h3>
                            <p>Total Appointments</p>
                        </div>
                    </div>
                    <div class="card summary-card">
                        <div class="summary-icon"><i class="fa-solid fa-calendar-day"></i></div>
                        <div class="summary-details">
                            <h3 id="stat-today-apt">0</h3>
                            <p>Today's Appointments</p>
                        </div>
                    </div>
                    <div class="card summary-card">
                        <div class="summary-icon"><i class="fa-solid fa-user-doctor"></i></div>
                        <div class="summary-details">
                            <h3 id="stat-total-doc">0</h3>
                            <p>Total Doctors</p>
                        </div>
                    </div>
                    <div class="card summary-card">
                        <div class="summary-icon" style="background-color:#fff3cd; color:#856404;"><i class="fa-solid fa-clock-rotate-left"></i></div>
                        <div class="summary-details">
                            <h3 id="stat-pending-req">0</h3>
                            <p>Pending Requests</p>
                        </div>
                    </div>
                </div>

                <div class="dashboard-grid">
                    <div class="card">
                        <div class="section-header">
                            <h3 style="margin:0;">Recent Appointments</h3>
                            <a href="pages/appointments.html" class="btn btn-outline">View All</a>
                        </div>
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Patient</th>
                                        <th>Doctor</th>
                                        <th>Date & Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="recent-appointments-body">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <h3 style="margin-top:0; margin-bottom: 20px;">Appointments Overview</h3>
                        <canvas id="appointmentsChart" width="100" height="100"></canvas>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="assets/js/data.js"></script>
    <script src="assets/js/layout.js"></script>
    <script src="assets/js/dashboard.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const ctx = document.getElementById('appointmentsChart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Completed', 'Pending', 'Confirmed', 'Cancelled'],
                    datasets: [{
                        data: [45, 15, 30, 10],
                        backgroundColor: ['#E9F6F3', '#fff3cd', '#d4edda', '#f8d7da'],
                        borderColor: ['#138C88', '#856404', '#155724', '#721c24'],
                        borderWidth: 1
                    }]
                }
            });
        });
    </script>
</body>
</html>
"""

html_appointments = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointments - Aurevia Admin</title>
    <link rel="stylesheet" href="../assets/css/admin.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="stylesheet" href="../assets/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="app-container">
        <aside class="sidebar" id="sidebar"></aside>
        
        <main class="main-wrapper">
            <header class="top-header" id="topHeader"></header>
            
            <div class="main-content">
                <div class="section-header">
                    <h2>Appointments Management</h2>
                    <button class="btn btn-primary" id="addAptBtn"><i class="fa-solid fa-plus"></i> New Appointment</button>
                </div>

                <div class="card">
                    <div class="filters-bar">
                        <input type="text" class="form-control" placeholder="Search Patient or ID..." style="max-width: 250px;">
                        <select class="form-control" style="max-width: 200px;">
                            <option value="">All Statuses</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <select class="form-control" style="max-width: 200px;">
                            <option value="">All Doctors</option>
                            <option value="Dr. Sarah Smith">Dr. Sarah Smith</option>
                            <option value="Dr. Mike Johnson">Dr. Mike Johnson</option>
                        </select>
                        <button class="btn btn-outline">Filter</button>
                    </div>

                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Patient Name</th>
                                    <th>Doctor</th>
                                    <th>Specialty</th>
                                    <th>Date & Time</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="appointments-table-body">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Appointment Modal -->
    <div class="modal-overlay" id="appointmentModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 style="margin:0;">Appointment Details</h3>
                <i class="fa-solid fa-xmark close-modal"></i>
            </div>
            <div class="modal-body">
                <form id="aptForm">
                    <input type="hidden" id="aptId">
                    <div class="form-group">
                        <label class="form-label">Patient Name</label>
                        <input type="text" class="form-control" id="patientName" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Doctor</label>
                        <select class="form-control" id="doctorName" required>
                            <option value="Dr. Sarah Smith">Dr. Sarah Smith</option>
                            <option value="Dr. Mike Johnson">Dr. Mike Johnson</option>
                            <option value="Dr. Emily Davis">Dr. Emily Davis</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: flex; gap: 16px;">
                        <div style="flex:1;">
                            <label class="form-label">Date</label>
                            <input type="date" class="form-control" id="aptDate" required>
                        </div>
                        <div style="flex:1;">
                            <label class="form-label">Time</label>
                            <input type="time" class="form-control" id="aptTime" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="form-control" id="aptStatus" required>
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline btn-cancel">Cancel</button>
                <button class="btn btn-primary" form="aptForm" type="submit">Save Appointment</button>
            </div>
        </div>
    </div>

    <script src="../assets/js/data.js"></script>
    <script src="../assets/js/layout.js"></script>
    <script src="../assets/js/appointments.js"></script>
</body>
</html>
"""

html_doctors = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctors - Aurevia Admin</title>
    <link rel="stylesheet" href="../assets/css/admin.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="stylesheet" href="../assets/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="app-container">
        <aside class="sidebar" id="sidebar"></aside>
        <main class="main-wrapper">
            <header class="top-header" id="topHeader"></header>
            <div class="main-content">
                <div class="section-header">
                    <h2>Doctors Management</h2>
                    <button class="btn btn-primary"><i class="fa-solid fa-plus"></i> Add Doctor</button>
                </div>
                <div class="card">
                    <p>Demonstration view for Doctors directory.</p>
                </div>
            </div>
        </main>
    </div>
    <script src="../assets/js/data.js"></script>
    <script src="../assets/js/layout.js"></script>
</body>
</html>
"""

def generate_pages():
    pages = ['staff', 'departments', 'locations', 'services', 'packages', 'resources', 'testimonials', 'content', 'analytics', 'settings']
    for page in pages:
        content = html_doctors.replace('Doctors', page.capitalize())
        write_file(f'pages/{page}.html', content)

write_file('assets/css/admin.css', css_admin)
write_file('assets/css/components.css', css_components)
write_file('assets/css/responsive.css', css_responsive)
write_file('assets/js/data.js', js_data)
write_file('assets/js/layout.js', js_layout)
write_file('assets/js/dashboard.js', js_dashboard)
write_file('assets/js/appointments.js', js_appointments)
write_file('index.html', html_dashboard)
write_file('pages/appointments.html', html_appointments)
write_file('pages/doctors.html', html_doctors)
generate_pages()

print("Scaffold generated successfully!")
