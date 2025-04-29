# User Registration & Login API Documentation

## User Endpoints

### Endpoint: `/user/register`

**Description:**  
This endpoint allows a new user to register by providing their full name, email, and password. Upon successful registration, the server returns a JSON Web Token (JWT) for authentication and the user information.

**Request Method:**  
`POST`

**Request Body:**  
The request body must be in JSON format and include the following fields:
- `fullName`: An object containing:
  - `firstName`: (String) Required. Minimum 3 characters.
  - `lastName`: (String) Required. Minimum 3 characters.
- `email`: (String) Required. Valid email format and minimum 5 characters.
- `password`: (String) Required. Minimum 6 characters.

**Example Request:**
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Response:**  
On success, the server responds with a status code of `201 Created` and a JSON object containing the token and user information.

**Success Response Example:**
```json
{
  "token": "your_jwt_token_here",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Status Codes:**
- `201 Created`: User successfully registered.
- `400 Bad Request`: Validation errors (missing fields, invalid email format).
- `500 Internal Server Error`: Server error.

---

### Endpoint: `/user/login`

**Description:**  
This endpoint allows an existing user to log in with their email and password. Successful authentication returns a JWT token and user information.

**Request Method:**  
`POST`

**Request Body:**  
- `email`: (String) Required. Valid email format.
- `password`: (String) Required. Minimum 6 characters.

**Example Request:**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Response:**  
On success, the server responds with a status code of `200 OK` and a JSON object containing the token and user information.

**Success Response Example:**
```json
{
  "token": "your_jwt_token_here",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Status Codes:**
- `200 OK`: User successfully logged in.
- `400 Bad Request`: Validation errors.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: Server error.

---

### Endpoint: `/user/logout`

**Description:**  
Logs out an authenticated user by blacklisting the JWT token and clearing the authentication cookie. The user must log in again to access protected routes.

**Request Method:**  
`GET`

**Authentication:**  
JWT token must be provided in cookies or the `Authorization` header.

**Example Request (cURL):**
```bash
curl -X GET http://localhost:3000/user/logout \
  -H "Authorization: Bearer your_jwt_token_here"
```

**Response:**  
On success, returns a status code `200 OK` with a logout confirmation message.

**Success Response Example:**
```json
{
  "message": "Log out Successfull"
}
```

**Status Codes:**
- `200 OK`: Logout is successful.
- `400 Bad Request`: Unauthorized access or token already blacklisted.
- `500 Internal Server Error`: Server error.

---

## Captain Endpoints

### Endpoint: `/captains/register`

**Description:**  
This endpoint enables a new captain to register by providing their basic details along with vehicle information. Upon successful registration, the server returns a JWT token for authentication along with the captain details. Note that the captain's status is set to "inactive" upon registration.

**Request Method:**  
`POST`

**Request Body:**  
The request body must be in JSON format and include the following fields:
- `firstName`: (String) Required. Minimum 3 characters.
- `lastName`: (String) Optional.
- `email`: (String) Required. Valid email format.
- `password`: (String) Required. Minimum 6 characters.
- `color`: (String) Required. The vehicle color, minimum 3 characters.
- `number`: (String) Required. A unique identifier for the captain/vehicle, minimum 3 characters.
- `plateNumber`: (String) Required. Minimum 3 characters.
- `type`: (String) Required. Must be one of: `car`, `bike`, or `auto`.
- `capacity`: (Number) Required. Numeric value indicating vehicle capacity.

**Example Request:**
```json
{
  "firstName": "Steve",
  "lastName": "Smith",
  "email": "captain@example.com",
  "password": "securePassword123",
  "color": "Red",
  "number": "CAP123",
  "plateNumber": "XYZ789",
  "type": "car",
  "capacity": 4
}
```

**Response:**  
On success, the server responds with a status code of `201 Created` and a JSON object containing the token and captain details.

**Success Response Example:**
```json
{
  "token": "your_jwt_token_here",
  "captain": {
    "fullName": {
      "firstName": "Steve",
      "lastName": "Smith"
    },
    "email": "captain@example.com",
    "number": "CAP123",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "capacity": 4,
      "plateNumber": "XYZ789",
      "category": "car"
    }
  }
}
```

**Status Codes:**
- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Validation errors (missing fields, invalid input).
- `500 Internal Server Error`: Server error.

---

### Endpoint: `/captains/login`

**Description:**  
This endpoint allows a registered captain to log in using their email and password. Successful authentication returns a JWT token.

**Request Method:**  
`POST`

**Request Body:**  
- `email`: (String) Required. Valid email format.
- `password`: (String) Required. Minimum 6 characters.

**Example Request:**
```json
{
  "email": "captain@example.com",
  "password": "securePassword123"
}
```

**Response:**  
On success, the server responds with a status code of `200 OK` and sets a cookie containing the JWT token.

**Success Response Example:**
```json
{
  "token": "your_jwt_token_here"
}
```

**Status Codes:**
- `200 OK`: Captain successfully logged in.
- `400 Bad Request`: Validation errors or missing fields.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: Server error.

---

### Endpoint: `/captains/profile`

**Description:**  
Retrieves the profile of an authenticated captain.

**Request Method:**  
`GET`

**Authentication:**  
Captain must be authenticated via JWT token provided in cookies or the `Authorization` header.

**Example Request (cURL):**
```bash
curl -X GET http://localhost:3000/captains/profile \
  -H "Authorization: Bearer your_jwt_token_here"
```

**Response:**  
On success, returns a status code `200 OK` with the captain's profile information.

**Success Response Example:**
```json
{
  "captain": {
    "fullName": {
      "firstName": "Steve",
      "lastName": "Smith"
    },
    "email": "captain@example.com",
    "number": "CAP123",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "capacity": 4,
      "plateNumber": "XYZ789",
      "category": "car"
    }
  }
}
```

**Status Codes:**
- `200 OK`: Profile retrieved successfully.
- `400 Bad Request`: Captain not found.
- `500 Internal Server Error`: Server error.

---

### Endpoint: `/captains/logout`

**Description:**  
Logs out an authenticated captain by blacklisting the JWT token and clearing the authentication cookie. After logout, the captain must log in again to access protected routes.

**Request Method:**  
`GET`

**Authentication:**  
Captain must be authenticated via JWT token provided in cookies or the `Authorization` header.

**Example Request (cURL):**
```bash
curl -X GET http://localhost:3000/captains/logout \
  -H "Authorization: Bearer your_jwt_token_here"
```

**Response:**  
On success, returns a status code `200 OK` with a logout confirmation message and clears the captain's token.

**Success Response Example:**
```json
{
  "message": "Logout Succesfull",
  "captain": null
}
```

**Status Codes:**
- `200 OK`: Logout successful.
- `400 Bad Request`: Token does not exist or unauthorized access.
- `500 Internal Server Error`: Server error.