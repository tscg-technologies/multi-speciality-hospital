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
    patients: [
        { id: 'PAT-001', name: 'John Doe', age: 45, gender: 'Male', phone: '+1-555-0100', status: 'Active' },
        { id: 'PAT-002', name: 'Jane Smith', age: 32, gender: 'Female', phone: '+1-555-0101', status: 'Active' },
        { id: 'PAT-003', name: 'Robert Brown', age: 58, gender: 'Male', phone: '+1-555-0102', status: 'Inactive' }
    ],
    staff: [
        { id: 'STF-001', name: 'Alice Walker', department: 'Administration', role: 'Manager', branch: 'Main City', status: 'Active' },
        { id: 'STF-002', name: 'Bob Wilson', department: 'Reception', role: 'Clerk', branch: 'Westside', status: 'Active' }
    ],
    departments: [
        { id: 'DEP-1', name: 'Cardiology', head: 'Dr. Sarah Smith', status: 'Active' },
        { id: 'DEP-2', name: 'Neurology', head: 'Dr. Mike Johnson', status: 'Active' },
        { id: 'DEP-3', name: 'Orthopedics', head: 'Dr. Emily Davis', status: 'Active' }
    ],
    locations: [
        { id: 'LOC-1', name: 'Main City Hospital', city: 'Metropolis', hours: '24/7', status: 'Active' },
        { id: 'LOC-2', name: 'Westside Clinic', city: 'Westside', hours: '8 AM - 8 PM', status: 'Active' }
    ],
    services: [
        { id: 'SRV-1', name: 'MRI Scan', category: 'Diagnostics', status: 'Active' },
        { id: 'SRV-2', name: 'Physical Therapy', category: 'Rehabilitation', status: 'Active' }
    ],
    packages: [
        { id: 'PKG-1', name: 'Complete Heart Checkup', price: '$299', audience: 'Adults 40+', status: 'Active' },
        { id: 'PKG-2', name: 'Basic Wellness', price: '$99', audience: 'All Ages', status: 'Active' }
    ],
    resources: [
        { id: 'RES-1', title: 'Managing Diabetes', category: 'Health Guide', status: 'Active' },
        { id: 'RES-2', title: 'Post-Surgery Care', category: 'FAQ', status: 'Active' }
    ],
    testimonials: [
        { id: 'TST-1', patient: 'John Doe', rating: '5', status: 'Active' },
        { id: 'TST-2', patient: 'Mary Johnson', rating: '4', status: 'Inactive' }
    ],
    stats: {
        totalAppointments: 1254,
        todayAppointments: 42,
        totalDoctors: 48,
        totalPatients: 3840,
        pendingRequests: 15,
        activeLocations: 3
    }
};

if (!localStorage.getItem('aurevia_data_v2')) {
    localStorage.setItem('aurevia_data_v2', JSON.stringify(DEMO_DATA));
}

window.getStoreData = function() {
    return JSON.parse(localStorage.getItem('aurevia_data_v2'));
};

window.saveStoreData = function(data) {
    localStorage.setItem('aurevia_data_v2', JSON.stringify(data));
};

window.resetDemoData = function() {
    localStorage.setItem('aurevia_data_v2', JSON.stringify(DEMO_DATA));
    location.reload();
};
