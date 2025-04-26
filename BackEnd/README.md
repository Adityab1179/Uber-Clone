# User Registration & Login API Documentation

## Endpoint: `/user/register`

### Description
This endpoint allows a new user to register by providing their full name, email, and password. Upon successful registration, the server will return a JSON Web Token (JWT) for authentication and the user information.

### Request Method
- `POST`

### Request Body
The request body must be in JSON format and include the following fields:

- `fullName`: An object containing:
  - `firstName`: (String) Required. Must be at least 3 characters long.
  - `lastName`: (String) Required. Must be at least 3 characters long.
  
- `email`: (String) Required. Must be a valid email format and at least 5 characters long.

- `password`: (String) Required. Must be at least 6 characters long.

### Example Request
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

### Response
On success, the server will respond with a status code of `201 Created` and a JSON object containing the token and user information.

#### Success Response Example
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

### Status Codes
- `201 Created`: User successfully registered.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid email format).
- `500 Internal Server Error`: An error occurred on the server while processing the request.

### Validation
The following validations are performed on the request data:
- `email`: Must be a valid email format.
- `fullName.firstName`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

---

## Endpoint: `/user/login`

### Description
This endpoint allows an existing user to log in using their email and password. On successful authentication, a JWT token and user information are returned.

### Request Method
- `POST`

### Request Body
The request body must be in JSON format and include the following fields:

- `email`: (String) Required. Must be a valid email format.
- `password`: (String) Required. Must be at least 6 characters long.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Response
On success, the server will respond with a status code of `200 OK` and a JSON object containing the token and user information.

#### Success Response Example
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

### Status Codes
- `200 OK`: User successfully logged in.
- `400 Bad Request`: Validation errors occurred (e.g., missing fields, invalid email format).
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: An error occurred on the server while processing the request.

### Validation
The following validations are performed on the request data:
- `email`: Must be a valid email format.
- `password`: Must be at least 6 characters long.

---

## Endpoint: `/user/logout`

### Description
This endpoint logs out an authenticated user by blacklisting the provided JWT token and clearing the authentication cookie. Once logged out, the user must log in again to access protected routes.

### Request Method
- `GET`

### Authentication
- The user must be authenticated. The JWT token should be provided either in the cookies or in the `Authorization` header.

### Request
No request body is required.

### Response
On success, the server will respond with a status code of `200 OK` and a JSON object with a logout confirmation message.

#### Success Response Example
```json
{
  "message": "Log out Successfull"
}
```

### Status Codes
- `200 OK`: Logout is successful.
- `400 Bad Request`: Unauthorized access attempted or token has already been blacklisted.
- `500 Internal Server Error`: An error occurred on the server while processing the request.