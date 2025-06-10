# Uber Clone

Uber Clone is a full-stack project consisting of a FrontEnd (React, Vite, Tailwind CSS) and a BackEnd (Express, MongoDB). This document provides an overview, folder structure, and setup instructions for both applications.

---

## Folder Structure

```
Uber Clone/
├── FrontEnd/      # React + Vite + Tailwind CSS frontend
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── README.md
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── components/
│   │       ├── Home.jsx
│   │       ├── UserLogin.jsx
│   │       ├── CaptainLogin.jsx
│   │       ├── CaptainRegister.jsx
│   │       ├── UserRegistser.jsx
│   │       ├── LocationSearchPanel.jsx
│   │       ├── VehiclePanel.jsx
│   │       ├── SelectedVehicle.jsx
│   │       ├── LookingForDriver.jsx
│   │       ├── WaitingForDriver.jsx
│   │       └── Riding.jsx
│   └── ...
├── BackEnd/       # Express + MongoDB backend API
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── README.md
│   ├── DB/
│   ├── controllers/
│   ├── middleWares/
│   ├── models/
│   ├── routes/
│   └── services/
└── Readme.md      # This file
```

---

## FrontEnd

### Overview

- Built with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [Tailwind CSS](https://tailwindcss.com/)
- Uses [react-router-dom](https://reactrouter.com/) for routing
- Modular, responsive, and fast

### Setup

1. Open a terminal in the `FrontEnd` directory:
   ```bash
   cd FrontEnd
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
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

### Linting

```bash
npm run lint
```

---

## BackEnd

### Overview

- Built with [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) (via Mongoose)
- JWT-based authentication for users and captains
- Endpoints for registration, login, profile, and logout
- Token blacklisting for secure logout

### Setup

1. Open a terminal in the `BackEnd` directory:
   ```bash
   cd BackEnd
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
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

See `BackEnd/README.md` for detailed API documentation, including request/response examples for all endpoints.

---

## Summary

- **FrontEnd:** Modern React app with Tailwind CSS and Vite, providing a smooth user and captain experience.
- **BackEnd:** Secure Express API with MongoDB, JWT authentication, and robust validation.
- **Folder Structure:** Both apps are organized for clarity and scalability.

For more details, see the respective `README.md` files in `FrontEnd` and `BackEnd`.

Happy coding!