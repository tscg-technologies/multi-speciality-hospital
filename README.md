# Aurevia Multispecialty Hospital - UI/UX Demo

This is a premium, responsive, multi-page frontend demonstration for a fictional healthcare organization, "Aurevia Multispecialty Hospital". It was developed entirely with HTML5, CSS3, and Vanilla JavaScript, without relying on frontend frameworks or build tools, making it exceptionally easy to deploy and customize.

## Features

- **Premium Design System:** A carefully crafted visual identity using deep navy, medical teal, and soft mint color palettes.
- **Fully Responsive:** Adapts seamlessly across mobile, tablet, laptop, and desktop viewports.
- **No Dependencies:** Built with pure HTML, CSS, and JavaScript. No npm, no Node.js, no build steps required.
- **Dynamic Content Rendering:** Demo data (doctors, specialties, locations) is stored in a central `data.js` file for easy updates.
- **Functional UI Elements:** Interactive mobile navigation, sticky headers, filterable doctor directories, accordion FAQs, and multi-step (simulated) appointment booking.
- **Accessible & Semantic:** Uses proper HTML5 landmarks, responsive typography, and high-contrast color ratios.

## How to Run Locally

Because this project consists entirely of static files, you can run it in several simple ways:

### Option 1: Live Server (Recommended)
If you are using Visual Studio Code:
1. Open the project folder in VS Code.
2. Install the "Live Server" extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Option 2: Python HTTP Server
If you have Python installed, open your terminal/command prompt in the project folder and run:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option 3: Direct Browser Viewing
You can simply double-click the `index.html` file to open it directly in your browser. 
*(Note: Some JavaScript fetching features might behave differently using the `file://` protocol depending on browser security settings, but the core functionality will work.)*

## Project Structure

```
multispecialty-hospital-demo/
│
├── index.html                 # Homepage
├── pages/                     # Inner pages
│   ├── about.html             # Institutional information
│   ├── specialties.html       # Directory of medical specialties
│   ├── specialty-details.html # Individual specialty template
│   ├── doctors.html           # Searchable doctor directory
│   ├── doctor-profile.html    # Individual doctor profile
│   ├── appointments.html      # Interactive booking form
│   ├── locations.html         # Hospital branches
│   ├── location-details.html  # Branch specific details
│   ├── facilities.html        # Medical infrastructure
│   ├── patient-resources.html # FAQs, Insurance, Packages
│   ├── contact.html           # Contact form
│   ├── privacy.html           # Privacy policy placeholder
│   └── terms.html             # Terms of use redirect
│
└── assets/
    ├── css/
    │   ├── style.css          # Core variables and base styles
    │   ├── components.css     # Buttons, Cards, Forms, Utilities
    │   └── responsive.css     # Media queries
    │
    └── js/
        ├── main.js            # Global interactions (Menu, Header)
        ├── data.js            # Central demo data store
        ├── doctors.js         # Doctor rendering and filtering
        ├── specialties.js     # Specialty rendering
        └── appointments.js    # Booking form logic
```

## How to Customize

This project is designed to be easily handed over to a client or backend team for integration.

1. **Brand Name & Colors:** 
   Open `assets/css/style.css`. The color palette and fonts are defined at the very top in the `:root` pseudo-class. Change `--clr-navy` and `--clr-teal` to match real brand colors. You can run a global find-and-replace for "Aurevia" to update the hospital name.

2. **Data & Content:**
   Open `assets/js/data.js`. All demo doctors, specialties, and locations are stored here as simple JavaScript objects. Modifying this file will instantly update the content across the directory and profile pages.

3. **Images:**
   The demo currently uses high-quality stock photography via URLs. To use local assets, download your images, place them in an `assets/images/` folder, and update the `src` attributes in the HTML files.

4. **Integration:**
   The frontend is completely decoupled. To add a backend, simply attach your preferred form submission logic to `appointments.html` and `contact.html`, and replace the static `data.js` arrays with API fetch calls.

## Disclaimer
This is a demonstration project. The hospital, doctors, specialties, locations, and medical information presented are entirely fictional. The appointment booking and contact forms do not transmit data to any real server.
