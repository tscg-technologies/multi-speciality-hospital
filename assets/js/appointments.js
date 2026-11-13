document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointment-form');
    
    if (appointmentForm && window.hospitalData) {
        const specSelect = document.getElementById('specialty');
        const docSelect = document.getElementById('doctor');
        const locSelect = document.getElementById('location');
        const dateInput = document.getElementById('date');
        
        // Populate Specialties
        window.hospitalData.specialties.forEach(spec => {
            const option = document.createElement('option');
            option.value = spec.id;
            option.textContent = spec.name;
            specSelect.appendChild(option);
        });
        
        // Populate Locations
        window.hospitalData.locations.forEach(loc => {
            const option = document.createElement('option');
            option.value = loc.id;
            option.textContent = loc.name;
            locSelect.appendChild(option);
        });
        
        // Restrict date to future
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
        // Filter doctors based on specialty
        specSelect.addEventListener('change', () => {
            docSelect.innerHTML = '<option value="">Select Doctor</option>';
            docSelect.disabled = false;
            
            const selectedSpec = specSelect.options[specSelect.selectedIndex].text;
            
            const filteredDocs = window.hospitalData.doctors.filter(d => 
                selectedSpec === 'Select Specialty' || d.specialty === selectedSpec
            );
            
            filteredDocs.forEach(doc => {
                const option = document.createElement('option');
                option.value = doc.id;
                option.textContent = `${doc.name} - ${doc.specialty}`;
                docSelect.appendChild(option);
            });
        });
        
        // Initial doctor population
        window.hospitalData.doctors.forEach(doc => {
            const option = document.createElement('option');
            option.value = doc.id;
            option.textContent = `${doc.name} - ${doc.specialty}`;
            docSelect.appendChild(option);
        });

        // Form submission demo
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = appointmentForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Processing...';
            btn.disabled = true;
            
            setTimeout(() => {
                document.getElementById('booking-process').style.display = 'none';
                document.getElementById('booking-success').style.display = 'block';
            }, 1500);
        });
    }
});
