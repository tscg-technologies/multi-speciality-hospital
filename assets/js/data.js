// Demo Data for Aurevia Multispecialty Hospital

const demoData = {
    specialties: [
        { id: 'cardiology', name: 'Cardiology', icon: 'heart', description: 'Advanced cardiac care, diagnostics, and intervention.' },
        { id: 'neurology', name: 'Neurology', icon: 'brain', description: 'Comprehensive treatment for neurological disorders.' },
        { id: 'orthopaedics', name: 'Orthopaedics', icon: 'bone', description: 'Expert care for bones, joints, and spine.' },
        { id: 'oncology', name: 'Oncology', icon: 'ribbon', description: 'State-of-the-art cancer treatment and support.' },
        { id: 'gastroenterology', name: 'Gastroenterology', icon: 'stomach', description: 'Specialized digestive system care.' },
        { id: 'paediatrics', name: 'Paediatrics', icon: 'child', description: 'Compassionate healthcare for children of all ages.' },
        { id: 'pulmonology', name: 'Pulmonology', icon: 'lungs', description: 'Expert respiratory and lung care.' },
        { id: 'general-medicine', name: 'General Medicine', icon: 'stethoscope', description: 'Comprehensive primary and preventive healthcare.' }
    ],
    doctors: [
        { id: 'dr-sarah-jenkins', name: 'Dr. Sarah Jenkins', specialty: 'Cardiology', experience: '15+ Years', qualifications: 'MD, DM (Cardiology)' },
        { id: 'dr-michael-chen', name: 'Dr. Michael Chen', specialty: 'Neurology', experience: '12+ Years', qualifications: 'MD, DM (Neurology)' },
        { id: 'dr-emily-roberts', name: 'Dr. Emily Roberts', specialty: 'Orthopaedics', experience: '18+ Years', qualifications: 'MS (Orthopaedics)' },
        { id: 'dr-david-patel', name: 'Dr. David Patel', specialty: 'Oncology', experience: '20+ Years', qualifications: 'MD, DM (Medical Oncology)' },
        { id: 'dr-lisa-thompson', name: 'Dr. Lisa Thompson', specialty: 'Paediatrics', experience: '10+ Years', qualifications: 'MD (Paediatrics)' },
        { id: 'dr-james-wilson', name: 'Dr. James Wilson', specialty: 'Gastroenterology', experience: '14+ Years', qualifications: 'MD, DM (Gastroenterology)' },
        { id: 'dr-amanda-lee', name: 'Dr. Amanda Lee', specialty: 'Pulmonology', experience: '11+ Years', qualifications: 'MD (Pulmonary Medicine)' },
        { id: 'dr-robert-taylor', name: 'Dr. Robert Taylor', specialty: 'General Medicine', experience: '25+ Years', qualifications: 'MD (Internal Medicine)' }
    ],
    locations: [
        { id: 'central-campus', name: 'Central Campus', address: '123 Medical Boulevard, City Center (Demo Location)', phone: '+1 (555) 010-0001' },
        { id: 'north-wing', name: 'North Wing Clinic', address: '456 North Avenue, Tech District (Demo Location)', phone: '+1 (555) 010-0002' },
        { id: 'south-care', name: 'South Care Center', address: '789 South Road, Suburbs (Demo Location)', phone: '+1 (555) 010-0003' }
    ]
};

// Expose data globally
window.hospitalData = demoData;
