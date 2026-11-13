document.addEventListener('DOMContentLoaded', () => {
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
    const items = data.staff || [];
    
    const search = document.getElementById('searchInput').value.toLowerCase();
    const status = document.getElementById('statusFilter').value;

    const filtered = items.filter(item => {
        const matchesSearch = Object.values(item).some(val => String(val).toLowerCase().includes(search));
        const matchesStatus = !status || item.status === status;
        return matchesSearch && matchesStatus;
    });
    
    tbody.innerHTML = '';
    if(filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" style="text-align:center; padding: 32px; color: var(--text-secondary);">No staff found.</td></tr>';
        lucide.createIcons();
        return;
    }

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        let tds = `<td><strong>${item.id}</strong></td>`;
        <td>${item.name}</td>
<td>${item.department}</td>
<td>${item.role}</td>
<td>${item.branch}</td>
<td><span class="status-badge status-${item.status === 'Active' ? 'completed' : 'cancelled'}">${item.status}</span></td>

        tds += `
            <td>
                <button class="btn btn-outline" onclick="editItem('${item.id}')" style="padding: 4px 8px; font-size: 12px;"><i data-lucide="edit-2" style="width:14px;height:14px"></i></button>
                <button class="btn btn-danger" onclick="deleteItem('${item.id}')" style="padding: 4px 8px; font-size: 12px;"><i data-lucide="trash-2" style="width:14px;height:14px"></i></button>
            </td>
        `;
        tr.innerHTML = tds;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

window.editItem = function(id) {
    const data = window.getStoreData();
    const item = data.staff.find(a => a.id === id);
    if(item) {
        document.getElementById('itemId').value = item.id;
        document.getElementById('field_name').value = item.name;
        document.getElementById('field_department').value = item.department;
        document.getElementById('field_role').value = item.role;
        document.getElementById('field_branch').value = item.branch;
        document.getElementById('field_status').value = item.status;
        
        showModal('itemModal');
    }
};

window.deleteItem = function(id) {
    if(confirm('Are you sure you want to delete this Staff Member?')) {
        const data = window.getStoreData();
        data.staff = data.staff.filter(a => a.id !== id);
        window.saveStoreData(data);
        renderTable();
    }
};

function saveItem() {
    const data = window.getStoreData();
    if(!data.staff) data.staff = [];
    const id = document.getElementById('itemId').value;
    
    const item = {
        name: document.getElementById('field_name').value,
        department: document.getElementById('field_department').value,
        role: document.getElementById('field_role').value,
        branch: document.getElementById('field_branch').value,
        status: document.getElementById('field_status').value,
        
    };

    if(id) {
        const idx = data.staff.findIndex(a => a.id === id);
        item.id = id;
        data.staff[idx] = item;
    } else {
        item.id = 'STA-' + Math.floor(Math.random() * 10000);
        data.staff.unshift(item);
    }
    
    window.saveStoreData(data);
    hideModal('itemModal');
    renderTable();
}