# User Registration API Documentation

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