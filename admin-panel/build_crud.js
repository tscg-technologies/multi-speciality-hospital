const fs = require('fs');
const path = require('path');

const PAGES = [{ name: 'patients', singular: 'Patient', icon: 'user', fields: ['name', 'age', 'gender', 'phone', 'status'] }, 
    { name: 'staff', singular: 'Staff Member', icon: 'users', fields: ['name', 'department', 'role', 'branch', 'status'] },
    { name: 'departments', singular: 'Department', icon: 'sitemap', fields: ['name', 'head', 'status'] },
    { name: 'locations', singular: 'Location', icon: 'building', fields: ['name', 'city', 'hours', 'status'] },
    { name: 'services', singular: 'Service', icon: 'stethoscope', fields: ['name', 'category', 'status'] },
    { name: 'packages', singular: 'Package', icon: 'box', fields: ['name', 'price', 'audience', 'status'] },
    { name: 'resources', singular: 'Resource', icon: 'book', fields: ['title', 'category', 'status'] },
    { name: 'testimonials', singular: 'Testimonial', icon: 'star', fields: ['patient', 'rating', 'status'] }
];

const TEMPLATE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>__CAPITALIZED__ - Aurevia Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/admin.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="stylesheet" href="../assets/css/responsive.css">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <div class="app-container">
        <aside class="sidebar" id="sidebar"></aside>
        
        <main class="main-wrapper">
            <header class="top-header" id="topHeader"></header>
            
            <div class="main-content">
                <div class="section-header">
                    <h2>__CAPITALIZED__ Management</h2>
                    <button class="btn btn-primary" id="addBtn"><i data-lucide="plus"></i> Add __SINGULAR__</button>
                </div>

                <div class="card">
                    <div class="filters-bar">
                        <input type="text" id="searchInput" class="form-control" placeholder="Search __CAPITALIZED__..." style="max-width: 250px;">
                        <select id="statusFilter" class="form-control" style="max-width: 200px;">
                            <option value="">All Statuses</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    __TH__
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="dataTableBody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" id="itemModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 style="margin:0;">__SINGULAR__ Details</h3>
                <i data-lucide="x" class="close-modal" style="cursor:pointer"></i>
            </div>
            <div class="modal-body">
                <form id="itemForm">
                    <input type="hidden" id="itemId">
                    __FORM_FIELDS__
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline btn-cancel" type="button">Cancel</button>
                <button class="btn btn-primary" form="itemForm" type="submit">Save __SINGULAR__</button>
            </div>
        </div>
    </div>

    <script src="../assets/js/data.js"></script>
    <script src="../assets/js/layout.js"></script>
    <script src="../assets/js/__NAME__.js"></script>
</body>
</html>`;

const TEMPLATE_JS = `document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('dataTableBody')) return;
    renderTable();

    document.getElementById('addBtn').addEventListener('click', () => {
        document.getElementById('itemForm').reset();
        document.getElementById('itemId').value = '';
        showModal('itemModal');
    });

    document.getElementById('itemForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveItem();
    });

    document.getElementById('searchInput').addEventListener('input', renderTable);
    document.getElementById('statusFilter').addEventListener('change', renderTable);
});

function renderTable() {
    const tbody = document.getElementById('dataTableBody');
    const data = window.getStoreData();
    const items = data.__NAME__ || [];
    
    const search = document.getElementById('searchInput').value.toLowerCase();
    const status = document.getElementById('statusFilter').value;

    const filtered = items.filter(item => {
        const matchesSearch = Object.values(item).some(val => String(val).toLowerCase().includes(search));
        const matchesStatus = !status || item.status === status;
        return matchesSearch && matchesStatus;
    });
    
    tbody.innerHTML = '';
    if(filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" style="text-align:center; padding: 32px; color: var(--text-secondary);">No __NAME__ found.</td></tr>';
        lucide.createIcons();
        return;
    }

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        let tds = \`<td><strong>\${item.id}</strong></td>\`;
        __TD__
        tds += \`
            <td>
                <button class="btn btn-outline" onclick="editItem('\${item.id}')" style="padding: 4px 8px; font-size: 12px;"><i data-lucide="edit-2" style="width:14px;height:14px"></i></button>
                <button class="btn btn-danger" onclick="deleteItem('\${item.id}')" style="padding: 4px 8px; font-size: 12px;"><i data-lucide="trash-2" style="width:14px;height:14px"></i></button>
            </td>
        \`;
        tr.innerHTML = tds;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

window.editItem = function(id) {
    const data = window.getStoreData();
    const item = data.__NAME__.find(a => a.id === id);
    if(item) {
        document.getElementById('itemId').value = item.id;
        __EDIT_ASSIGN__
        showModal('itemModal');
    }
};

window.deleteItem = function(id) {
    if(confirm('Are you sure you want to delete this __SINGULAR__?')) {
        const data = window.getStoreData();
        data.__NAME__ = data.__NAME__.filter(a => a.id !== id);
        window.saveStoreData(data);
        renderTable();
    }
};

function saveItem() {
    const data = window.getStoreData();
    if(!data.__NAME__) data.__NAME__ = [];
    const id = document.getElementById('itemId').value;
    
    const item = {
        __SAVE_ASSIGN__
    };

    if(id) {
        const idx = data.__NAME__.findIndex(a => a.id === id);
        item.id = id;
        data.__NAME__[idx] = item;
    } else {
        item.id = '__PREFIX__-' + Math.floor(Math.random() * 10000);
        data.__NAME__.unshift(item);
    }
    
    window.saveStoreData(data);
    hideModal('itemModal');
    renderTable();
}`;

function build() {
    PAGES.forEach(page => {
        let th = '';
        let formFields = '';
        let td = '';
        let editAssign = '';
        let saveAssign = '';

        page.fields.forEach(f => {
            const fCap = f.charAt(0).toUpperCase() + f.slice(1);
            th += `<th>${fCap}</th>\n                                    `;
            
            if (f === 'status') {
                formFields += `
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="form-control" id="field_${f}" required>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>`;
                td += `<td><span class="status-badge status-\${item.${f} === 'Active' ? 'completed' : 'cancelled'}">\${item.${f}}</span></td>\n`;
            } else {
                formFields += `
                    <div class="form-group">
                        <label class="form-label">${fCap}</label>
                        <input type="text" class="form-control" id="field_${f}" required>
                    </div>`;
                td += `<td>\${item.${f}}</td>\n`;
            }
            
            editAssign += `document.getElementById('field_${f}').value = item.${f};\n        `;
            saveAssign += `${f}: document.getElementById('field_${f}').value,\n        `;
        });

        let html = TEMPLATE_HTML
            .replace(/__CAPITALIZED__/g, page.name.charAt(0).toUpperCase() + page.name.slice(1))
            .replace(/__SINGULAR__/g, page.singular)
            .replace(/__NAME__/g, page.name)
            .replace(/__TH__/g, th)
            .replace(/__FORM_FIELDS__/g, formFields);

        let js = TEMPLATE_JS
            .replace(/__NAME__/g, page.name)
            .replace(/__SINGULAR__/g, page.singular)
            .replace(/__PREFIX__/g, page.name.substring(0,3).toUpperCase())
            .replace(/__TD__/g, td)
            .replace(/__EDIT_ASSIGN__/g, editAssign)
            .replace(/__SAVE_ASSIGN__/g, saveAssign);

        fs.writeFileSync(path.join(__dirname, 'pages', `${page.name}.html`), html);
        fs.writeFileSync(path.join(__dirname, 'assets', 'js', `${page.name}.js`), js);
    });
}

build();
console.log("Pages built");
