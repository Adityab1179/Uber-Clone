# Uber Clone - FrontEnd

This is the frontend for the Uber Clone application built with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Routing:** Managed by [react-router-dom](https://reactrouter.com/)
- **Styling:** Tailwind CSS for rapid UI development
- **Responsive Design:** Optimized for all devices

## Project Structure

```
FrontEnd/
├── index.html                  // HTML entry point
├── package.json                // Project dependencies and scripts
├── README.md                   // This file
├── vite.config.js              // Vite configuration file
├── src/
│   ├── main.jsx                // Application entry point
│   ├── App.jsx                 // App router and layout configuration
│   ├── index.css               // Tailwind CSS imports and custom styles
│   └── components/             // React components
│       ├── Home.jsx            // Home page component
│       ├── UserLogin.jsx       // User login component
│       ├── CaptainLogin.jsx    // Captain login component
│       ├── CaptainRegister.jsx // Captain registration component
│       └── UserRegistser.jsx   // User registration component
```

## Key Components

- **main.jsx:**  
  The main entry point for the React application. It renders the root component (`App`) into the DOM and applies React's StrictMode for highlighting potential problems.

- **App.jsx:**  
  Sets up the application's routing using `react-router-dom`. Defines the main layout and all routes, including home, user login, captain login, user registration, and captain registration.

- **Home.jsx:**  
  The landing page of the application. Displays the Uber logo and a "Get Started" section with a button that navigates users to the login page.

- **UserLogin.jsx:**  
  Handles user login. Collects email and password, submits them to the backend `/users/login` endpoint, and provides a link to create a new account or sign in as a captain.

- **CaptainLogin.jsx:**  
  Handles captain login. Collects email and password, submits them to the backend `/captains/login` endpoint, and provides a link to register as a captain or sign in as a user.

- **UserRegistser.jsx:**  
  Handles user registration. Collects first name, last name, email, and password, then submits the data to the backend `/users/signUp` endpoint. Includes a link for existing users to log in and displays a reCAPTCHA notice.

- **CaptainRegister.jsx:**  
  Handles captain registration. Collects first name, last name, email, and password, then submits the data to the backend `/captains/login` endpoint. Also provides a link to sign in as a user.

- **README.md:**  
  This file. Provides setup, usage, and component explanations.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Open a terminal and navigate to the project folder:

   ```bash
   cd "c:\Users\Dell\Desktop\Uber Clone\FrontEnd"
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the development server by running:

```bash
npm run dev
```

This launches the application in your default browser. The server supports hot-reloading so changes will be reflected automatically.

### Building for Production

To build the app for production:

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

Explanation of Key Components
1. Routing and Layout:
The application uses react-router-dom to handle navigation. The App.jsx file sets up the router with a primary layout component (AppLayout) and defines nested routes for various views such as home, login, and registration.

2. Component Structure:
Individual components such as UserLogin and CaptainLogin etc are responsible for rendering specific portions of the UI and handling user interactions through forms. Each component fetches the necessary data from the backend endpoints.

3. Styling with Tailwind CSS:
Tailwind CSS is used extensively across the project to quickly style components using utility-first classes. This approach makes it easier to implement responsive design and maintain a consistent look throughout the app.

4. Development Workflow:
Vite powers the development environment with features like hot module replacement (HMR) for a seamless coding experience and optimized build times for production deployment.

## Linting

To lint the project files:

```bash
npm run lint
```

Happy coding!