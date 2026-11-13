document.addEventListener('DOMContentLoaded', () => {
    const doctorsContainer = document.getElementById('doctors-container');
    
    if (doctorsContainer && window.hospitalData) {
        // SVG Icon for location
        const locIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px; vertical-align: -3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
        
        // Initial render
        renderDoctors(window.hospitalData.doctors);
        
        // Search & Filter
        const searchInput = document.getElementById('doctor-search');
        const specFilter = document.getElementById('specialty-filter');
        
        if (searchInput && specFilter) {
            // Populate specialty filter
            window.hospitalData.specialties.forEach(spec => {
                const option = document.createElement('option');
                option.value = spec.name;
                option.textContent = spec.name;
                specFilter.appendChild(option);
            });
            
            const filterDoctors = () => {
                const searchTerm = searchInput.value.toLowerCase();
                const selectedSpec = specFilter.value;
                
                const filtered = window.hospitalData.doctors.filter(doc => {
                    const matchesSearch = doc.name.toLowerCase().includes(searchTerm) || doc.specialty.toLowerCase().includes(searchTerm);
                    const matchesSpec = selectedSpec === "" || doc.specialty === selectedSpec;
                    return matchesSearch && matchesSpec;
                });
                
                renderDoctors(filtered);
            };
            
            searchInput.addEventListener('input', filterDoctors);
            specFilter.addEventListener('change', filterDoctors);
        }
    }
    
    function renderDoctors(doctors) {
        if (doctors.length === 0) {
            doctorsContainer.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: var(--space-8);"><h4>No doctors found matching your criteria.</h4><p>Please adjust your filters and try again.</p></div>';
            return;
        }
        
        doctorsContainer.innerHTML = '';
        
        // Use a generic placeholder portrait since we don't have individual images
        const placeholderImg = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop";

        doctors.forEach(doc => {
            const card = document.createElement('div');
            card.className = 'card';
            
            card.innerHTML = `
                <div class="card-img-wrapper" style="aspect-ratio: 3/4;">
                    <!-- Using a generic medical professional image as placeholder -->
                    <img src="${placeholderImg}" alt="${doc.name}" style="object-position: top center;">
                </div>
                <div class="card-content" style="padding: var(--space-5);">
                    <div style="color: var(--clr-teal); font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--space-2);">${doc.specialty}</div>
                    <h3 style="margin-bottom: var(--space-2); font-size: 1.375rem;">${doc.name}</h3>
                    <p style="font-size: 0.9375rem; margin-bottom: var(--space-3); color: var(--clr-text-secondary); line-height: 1.4;">${doc.qualifications}</p>
                    <div style="font-size: 0.875rem; font-weight: 500; margin-bottom: var(--space-5); display: flex; align-items: center; gap: var(--space-2);">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--clr-teal);"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>${doc.experience} Experience</span>
                    </div>
                    <div style="display: flex; gap: var(--space-2); margin-top: auto;">
                        <a href="doctor-profile.html?id=${doc.id}" class="btn btn-outline" style="flex: 1; padding: 0.75rem 0.5rem; font-size: 0.875rem;">Profile</a>
                        <a href="appointments.html?doctor=${doc.id}" class="btn btn-primary" style="flex: 1; padding: 0.75rem 0.5rem; font-size: 0.875rem;">Book</a>
                    </div>
                </div>
            `;
            
            doctorsContainer.appendChild(card);
        });
    }
});
