# Kindlevent Client

**Live Demo:** [https://kindlevent-sh.web.app/](https://kindlevent-sh.web.app/)

## 📌 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack & Dependencies](#tech-stack--dependencies)
4. [Installation & Setup](#installation--setup)
5. [Environment Variables](#environment-variables)
6. [Available Scripts](#available-scripts)
7. [Folder Structure](#folder-structure)
8. [Responsive Design](#responsive-design)
9. [Deployment](#deployment)
10. [Author](#author)

---

## 📝 Project Overview

**Kindlevent** is a community-driven social service events platform. Users can:

-   Discover and join upcoming local events (cleanups, tree plantations, donations, etc.)
-   Create and manage their own events
-   Toggle between light and dark themes
-   Securely authenticate with email/password or Google

This client application is built with React and deployed on Firebase.

---

## 🚀 Features

-   **Event Management**

    -   Create events with future-date validation
    -   View upcoming events in a responsive grid
    -   Join events and track joined events
    -   Manage (edit) events you created

-   **Search & Filter**

    -   Search events by title
    -   Filter events by type (Cleanup, Plantation, Donation, etc.)

-   **UI/UX Enhancements**

    -   Theme toggle (light/dark mode)
    -   Toast and SweetAlert2 notifications
    -   Date picker with `react-datepicker`
    -   Loader animations with `lottie-react`

-   **Static Sections**

    -   Banner & Features section
    -   Gallery showcase
    -   Newsletter subscription form (UI only)

---

## 🛠 Tech Stack & Dependencies

-   **Framework:** React (via Vite)
-   **Routing:** react-router@^7.6.2
-   **State & API:** axios@^1.9.0
-   **Styling:** Tailwind CSS@^4.1.8, daisyUI@^5.0.43
-   **Date Handling:** date-fns@^4.1.0, react-datepicker@^8.4.0
-   **Icons & Animations:** lucide-react@^0.514.0, react-icons@^5.5.0, lottie-react@^2.4.1, react-simple-typewriter@^5.0.1
-   **Notifications:** react-toastify@^11.0.5, sweetalert2@^11.22.0
-   **Firebase:** firebase@^11.9.0
-   **Theme Control:** theme-change@^2.5.0

> For the full list, see `package.json` dependencies.

---

## 📥 Installation & Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/<your-username>/kindlevent-client.git
    cd kindlevent-client
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure environment**

    - Copy `.env.local.example` to `.env.local`
    - Add your Firebase project credentials

4. **Start development server**

    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173`.

---

## 🔑 Environment Variables

Create a file named `.env.local` at the root of the project with the following variables:

```
VITE_API_BASE_URL=https://kindlevent-server.vercel.app
VITE_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
VITE_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
VITE_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
VITE_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
VITE_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
VITE_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
```

> **Note:** Ensure `.env.local` is added to `.gitignore` to keep credentials secure.

---

## 📋 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📂 Folder Structure

```
kindlevent-client/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, Lottie files
│   ├── components/        # Reusable UI components
│   ├── contexts/          # Auth & theme context
│   ├── pages/             # Route components
│   ├── services/          # API call functions
│   ├── styles/            # Global styles (Tailwind config)
│   ├── utils/             # Helper functions
│   ├── App.jsx            # App root
│   └── main.jsx           # Entry point
├── .env.local             # Environment variables (ignored)
├── firebase.json          # Firebase hosting config
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## 📱 Responsive Design

This application is built mobile-first and has been tested on:

-   **Mobile:** Any 320px+ width
-   **Tablet:** 768px+ width
-   **Desktop:** 1024px+ width

All components adapt fluidly across different viewports.

---

## 🚀 Deployment

This client is deployed to Firebase Hosting:

```bash
# To deploy
npm run build
firebase deploy
```

> Ensure your Firebase project has `https://kindlevent-sh.web.app` authorized under Hosting settings.

---

## 👤 Author

**Maksudur Rahman**
GitHub: [github.com/code-shams](https://github.com/code-shams)

_Happy coding!_
