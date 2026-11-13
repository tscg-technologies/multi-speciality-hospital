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
                <button class="btn btn-outline" onclick="editApt('${apt.id}')" style="padding: 4px 8px; font-size: 12px;"><i data-lucide="edit-2" style="width:14px;height:14px;"></i></button>
                <button class="btn btn-danger" onclick="deleteApt('${apt.id}')" style="padding: 4px 8px; font-size: 12px;"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
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
        specialty: 'General',
        date: document.getElementById('aptDate').value,
        time: document.getElementById('aptTime').value,
        branch: 'Main City',
        status: document.getElementById('aptStatus').value
    };

    if(id) {
        const idx = data.appointments.findIndex(a => a.id === id);
        apt.id = id;
        data.appointments[idx] = apt;
    } else {
        apt.id = 'APT-' + Math.floor(Math.random() * 10000);
        data.appointments.unshift(apt);
    }
    
    window.saveStoreData(data);
    hideModal('appointmentModal');
    renderAppointments();
}
