document.addEventListener('DOMContentLoaded', () => {
    const sidebarHTML = `
        <div class="sidebar-brand">
            <i data-lucide="activity" style="color: var(--medical-teal);"></i>
            <span>Aurevia Admin</span>
        </div>
        <div class="sidebar-nav">
            <a href="${getRelativePath('')}index.html" class="nav-item ${isActive('index.html')}"><i data-lucide="layout-dashboard"></i> Dashboard</a>
            <a href="${getRelativePath('pages/')}appointments.html" class="nav-item ${isActive('appointments.html')}"><i data-lucide="calendar"></i> Appointments</a>
            <a href="${getRelativePath('pages/')}doctors.html" class="nav-item ${isActive('doctors.html')}"><i data-lucide="stethoscope"></i> Doctors</a>
            <a href="${getRelativePath('pages/')}patients.html" class="nav-item ${isActive('patients.html')}"><i data-lucide="users"></i> Patients</a>
            <a href="${getRelativePath('pages/')}staff.html" class="nav-item ${isActive('staff.html')}"><i data-lucide="contact"></i> Staff</a>
            <a href="${getRelativePath('pages/')}departments.html" class="nav-item ${isActive('departments.html')}"><i data-lucide="layers"></i> Departments</a>
            <a href="${getRelativePath('pages/')}locations.html" class="nav-item ${isActive('locations.html')}"><i data-lucide="map-pin"></i> Locations</a>
            <a href="${getRelativePath('pages/')}services.html" class="nav-item ${isActive('services.html')}"><i data-lucide="briefcase-medical"></i> Services</a>
            <a href="${getRelativePath('pages/')}packages.html" class="nav-item ${isActive('packages.html')}"><i data-lucide="package"></i> Packages</a>
            <a href="${getRelativePath('pages/')}resources.html" class="nav-item ${isActive('resources.html')}"><i data-lucide="book-open"></i> Resources</a>
            <a href="${getRelativePath('pages/')}testimonials.html" class="nav-item ${isActive('testimonials.html')}"><i data-lucide="star"></i> Testimonials</a>
            <a href="${getRelativePath('pages/')}content.html" class="nav-item ${isActive('content.html')}"><i data-lucide="file-text"></i> Web Content</a>
            <a href="${getRelativePath('pages/')}analytics.html" class="nav-item ${isActive('analytics.html')}"><i data-lucide="bar-chart-2"></i> Analytics</a>
            <a href="${getRelativePath('pages/')}settings.html" class="nav-item ${isActive('settings.html')}"><i data-lucide="settings"></i> Settings</a>
        </div>
    `;
    const sidebar = document.getElementById('sidebar');
    if(sidebar) {
        sidebar.innerHTML = sidebarHTML;
    }

    const pageTitle = document.title.split('-')[0].trim();
    const headerHTML = `
        <div class="header-left">
            <i data-lucide="menu" class="sidebar-toggle" id="sidebarToggle"></i>
            <h1 class="page-title">${pageTitle}</h1>
        </div>
        <div class="header-right">
            <a href="../index.html" target="_blank" class="btn btn-outline"><i data-lucide="external-link" style="width: 16px; height: 16px; margin-right: 6px;"></i> View Site</a>
            <div class="header-icon">
                <i data-lucide="bell"></i>
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
    if(header) {
        header.innerHTML = headerHTML;
    }

    const sidebarToggle = document.getElementById('sidebarToggle');
    if(sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    document.querySelectorAll('.close-modal, .btn-cancel').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if(modal) modal.classList.remove('active');
        });
    });

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide icons not loaded');
    }
});

function getRelativePath(folder) {
    const isPages = window.location.pathname.includes('/pages/');
    if(isPages && folder === '') return '../';
    if(isPages && folder === 'pages/') return '';
    return folder;
}

function isActive(page) {
    if(window.location.pathname.endsWith('/admin-panel/') && page === 'index.html') return 'active';
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
