# Uber Clone

Uber Clone is a comprehensive project that consists of a FrontEnd and a BackEnd application. This overview explains the project structure and provides instructions for setting up and running both components.

## Project Structure

```
Uber Clone/
├── FrontEnd/      // Frontend application built with Vite, React, and Tailwind CSS
├── BackEnd/       // Backend API handling user and captain registration, authentication, etc.
└── readme.md      // This file
```

---

## FrontEnd

### Overview

The FrontEnd is built using [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [Tailwind CSS](https://tailwindcss.com/). It leverages [react-router-dom](https://reactrouter.com/) for client-side routing and includes pages/components such as Home, User Login, Captain Login, and Registration.

### Key Features

- **Routing:** Defined in `App.jsx` with nested routes and a primary layout.
- **Responsive Design:** Uses Tailwind CSS utility classes for rapid styling.
- **Component-Based:** Modular, reusable components for various views.
- **Fast Development:** Powered by Vite for quick hot module replacement and optimized builds.

### Getting Started

1. Open a terminal in the FrontEnd directory:

   ```bash
   cd FrontEnd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Preview production build:

   ```bash
   npm run preview
   ```

### FrontEnd Structure

```
FrontEnd/
├── index.html                  // HTML entry point
├── package.json                // Project dependencies and scripts
├── vite.config.js              // Vite configuration file
├── README.md                   // FrontEnd documentation
└── src/
    ├── main.jsx                // Application entry point
    ├── App.jsx                 // React Router and layout configuration
    ├── index.css               // Global styles (includes Tailwind CSS)
    └── components/             // React components
        ├── Home.jsx            // Home page
        ├── UserLogin.jsx       // User login page
        ├── CaptainLogin.jsx    // Captain login page
        ├── CaptainRegister.jsx // Captain registration page
        └── UserRegistser.jsx   // User registration page
```

---

## BackEnd

### Overview

The BackEnd is an API built with [Express](https://expressjs.com/) and uses [MongoDB](https://www.mongodb.com/) (via Mongoose) for data storage. It supports user and captain registration, login, profile retrieval, and logout operations. Authentication is implemented through JSON Web Tokens (JWT), and middleware ensures protected routes.

### Key Features

- **User Endpoints:**
  - **Register:** `/users/register`
  - **Login:** `/users/login`
  - **Profile:** `/users/profile`
  - **Logout:** `/users/logout`
- **Captain Endpoints:**
  - **Register:** `/captains/register`
  - **Login:** `/captains/login`
  - **Profile:** `/captains/profile`
  - **Logout:** `/captains/logout`
- **Security:**  
  - JWT-based authentication.
  - Token blacklisting on logout.
- **Validation:**  
  - Uses `express-validator` for validating incoming requests.
- **Middleware:**  
  - Custom middleware for authorizing users and captains.

### Getting Started

1. Open a terminal in the BackEnd directory:

   ```bash
   cd BackEnd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with required variables. For example:

   ```
   PORT=3000
   DB_String=<Your MongoDB Connection String>
   JWT_SECRET=<Your JWT Secret>
   ```

4. Start the server:

   ```bash
   node server.js
   ```

### API Documentation

Detailed API documentation, including request and response examples for each endpoint, is available in the BackEnd's dedicated README.md.

For example, the BackEnd README.md explains:

- **User Registration & Login:**  
  Endpoints like `/users/register` and `/users/login` that handle user creation and authentication.
  
- **Captain Endpoints:**  
  Endpoints like `/captains/register`, `/captains/login`, etc., that handle similar operations for captains.
  
- **Token Management:**  
  How JWT tokens are generated, verified, and blacklisted during logout operations.

Refer to the BackEnd/README.md file for full details.

---

## Common Utilities

- **Linting (FrontEnd):**

  For the FrontEnd, run:

  ```bash
  npm run lint
  ```

- **Environment & Tooling:**

  Both parts of the project rely on common development practices such as environment variable management and code linting.

---

## Conclusion

This Uber Clone project integrates a modern FrontEnd with a robust BackEnd API to simulate a ride-sharing application. For more details regarding each component, please review the respective README files in the `FrontEnd` and `BackEnd` directories.

Happy coding!