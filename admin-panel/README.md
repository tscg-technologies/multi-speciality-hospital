# Aurevia Multispecialty Hospital - Admin Panel

A premium, responsive, front-end only administration panel designed for the Aurevia Hospital demonstration.

## Features

- **Dashboard Overview:** Key statistics, charts, and recent activity.
- **Appointments Management:** Complete CRUD workflow with search, filtering, and status updates.
- **Doctors Directory:** View, search, edit, and delete doctor profiles.
- **Responsive Design:** Optimized for all screen sizes from mobile to 4K desktops.
- **Vanilla Tech Stack:** Built entirely with HTML5, CSS3, and Vanilla JavaScript.
- **Client-side State:** Uses `localStorage` to simulate backend operations during the demo.

## Project Structure

```
admin-panel/
│
├── index.html                   # Dashboard overview
├── pages/                       # All internal administration modules
│   ├── appointments.html
│   ├── doctors.html
│   ├── staff.html
│   ├── departments.html
│   ├── locations.html
│   ├── services.html
│   ├── packages.html
│   ├── resources.html
│   ├── testimonials.html
│   ├── content.html
│   ├── analytics.html
│   └── settings.html
│
├── assets/
│   ├── css/
│   │   ├── admin.css            # Base styles, typography, layout
│   │   ├── components.css       # Cards, buttons, tables, forms, modals
│   │   └── responsive.css       # Media queries
│   │
│   └── js/
│       ├── data.js              # Mock data & localStorage initialization
│       ├── layout.js            # Sidebar and Header DOM rendering/toggling
│       ├── dashboard.js         # Chart and stat rendering logic
│       ├── appointments.js      # CRUD operations for appointments
│       └── doctors.js           # Read and delete operations for doctors
```

## How to Run

1.  **No build tools required.** Simply open the `index.html` file in any modern web browser to view the application.
2.  If you want to view it on a local development server to avoid CORS issues with modules or relative paths, you can run:
    *   **Python 3:** `python -m http.server 8000`
    *   **Node.js (serve):** `npx serve .`
3.  Access the dashboard at `http://localhost:8000` (or the port specified by your server).

## Note on Data Persistence

All operations (add, edit, delete, status changes) are saved to your browser's `localStorage` under the key `aurevia_data`. This ensures that your interactions persist across page reloads during the demonstration. 

If you want to reset the data back to its original illustrative state, you can call `window.resetDemoData()` from the browser console, or clear your site data. 

**This is a frontend-only client demonstration. It is not connected to a live database or a real hospital management system.**
