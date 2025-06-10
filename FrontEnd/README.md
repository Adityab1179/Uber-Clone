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
│       ├── Home.jsx
│       ├── UserLogin.jsx
│       ├── CaptainLogin.jsx
│       ├── CaptainRegister.jsx
│       ├── UserRegistser.jsx
│       ├── LocationSearchPanel.jsx
│       ├── VehiclePanel.jsx
│       ├── SelectedVehicle.jsx
│       ├── LookingForDriver.jsx
│       ├── WaitingForDriver.jsx
│       └── Riding.jsx
```

## Key Components

- **main.jsx:**  
  The main entry point for the React application. Renders the root component (`App`) into the DOM, wraps it with context providers, and applies React's StrictMode.

- **App.jsx:**  
  Sets up the application's routing using `react-router-dom`. Defines the main layout and all routes, including home, login, registration, and protected user/captain home pages.

- **Home.jsx:**  
  The landing page of the application. Displays the Uber logo and a "Get Started" section with a button that navigates users to the login page.

- **UserLogin.jsx:**  
  Handles user login. Collects email and password, submits them to the backend `/users/login` endpoint, and provides a link to create a new account or sign in as a captain.

- **CaptainLogin.jsx:**  
  Handles captain login. Collects email and password, submits them to the backend `/captains/login` endpoint, and provides a link to register as a captain or sign in as a user.

- **UserRegistser.jsx:**  
  Handles user registration. Collects first name, last name, email, and password, then submits the data to the backend `/users/register` endpoint. Includes a link for existing users to log in and displays a reCAPTCHA notice.

- **CaptainRegister.jsx:**  
  Handles captain registration. Collects first name, last name, email, password, and vehicle details, then submits the data to the backend `/captains/register` endpoint. Also provides a link to sign in as a user.

- **LocationSearchPanel.jsx:**  
  Allows users to enter their pickup and destination locations, search for rides, and select from suggested locations. Expands/collapses for a better mobile experience and manages the ride booking flow.

- **VehiclePanel.jsx:**  
  Lets users choose a vehicle type (car, bike, auto) after entering their locations. Displays available options with estimated prices and times.

- **SelectedVehicle.jsx:**  
  Shows the selected vehicle details, pickup and destination, and allows the user to confirm the ride.

- **LookingForDriver.jsx:**  
  Displays a waiting screen while searching for a driver after ride confirmation, showing ride and vehicle details.

- **WaitingForDriver.jsx:**  
  Shows driver and ride details after a driver is found and the ride is confirmed.

- **Riding.jsx:**  
  Displays the ongoing ride screen with driver, vehicle, and payment details.

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

## Linting

To lint the project files:

```bash
npm run lint
```

Happy coding!