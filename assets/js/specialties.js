document.addEventListener('DOMContentLoaded', () => {
    const specialtyContainer = document.getElementById('specialty-container');
    
    if (specialtyContainer && window.hospitalData) {
        // SVG icons string map for simple demo
        const icons = {
            heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
            brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.54A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.54A4 4 0 1 1 12 18Z"></path><path d="M12 20a2 2 0 0 0 2-2c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2Z"></path><path d="M12 9a2 2 0 0 0 2-2c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2Z"></path></svg>',
            bone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10c.7-.7 1.4-1 2-1 2.2 0 4 1.8 4 4s-1.8 4-4 4c-.6 0-1.3-.3-2-1-.7.7-1.4 1-2 1-2.2 0-4-1.8-4-4 0-.6.3-1.3 1-2"></path><path d="M13.2 4.2c-2-2-5.4-2-7.4 0s-2 5.4 0 7.4"></path><path d="M5.8 11.6c-2 2-2 5.4 0 7.4s5.4 2 7.4 0"></path><path d="M15 15l-6-6"></path></svg>',
            ribbon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"></path><path d="M12 22s-2-2-2-5c0-2.5 2-4.5 2-4.5s2 2 2 4.5c0 3-2 5-2 5z"></path></svg>',
            stomach: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9v2c0 2.2-1.8 4-4 4h-2"></path><path d="M15 15v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2"></path><path d="M15 15c-2.8 0-5-2.2-5-5V7"></path><path d="M10 7a3 3 0 0 1 6 0v3"></path></svg>',
            child: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"></path></svg>',
            lungs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v4"></path><path d="M8 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5V8c0-2.2-1.8-4-4-4"></path><path d="M16 12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5V8c0-2.2 1.8-4 4-4"></path></svg>',
            stethoscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 10V6s0-2 3-2h0c3 0 3 2 3 2v4c0 3.3-2.7 6-6 6"></path><path d="M8 16v6"></path><circle cx="8" cy="22" r="2"></circle><path d="M19 12a2 2 0 0 1-2 2h-2"></path><path d="M21 12a2 2 0 0 1-2 2h-2"></path><path d="M15 12h6"></path></svg>'
        };

        const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
        const basePath = isIndex ? 'pages/' : '';

        window.hospitalData.specialties.forEach(spec => {
            const el = document.createElement('div');
            el.className = 'specialty-card card text-center';
            el.innerHTML = `
                <div class="card-content">
                    <div class="specialty-icon-container" style="margin-inline: auto;">
                        ${icons[spec.icon] || icons['stethoscope']}
                    </div>
                    <h3 class="card-title">${spec.name}</h3>
                    <p style="font-size: 1rem; color: var(--clr-text-secondary);">${spec.description}</p>

                    <a href="${basePath}specialty-details.html?id=${spec.id}" class="text-teal" style="font-weight: 600; font-size: 0.9375rem;">Learn More &rarr;</a>
                </div>
            `;
            specialtyContainer.appendChild(el);
        });
    }
});
