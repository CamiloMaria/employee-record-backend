## Before starting I want to tell you that there is another readme.md in spanish in case you are interested. Thank you

# Employee Extension Search - NestJS Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  
## Description

This repository contains a NestJS-based project for implementing an Employee Extension Search application. The application allows employees to search for extensions of their colleagues within the office. It also includes an admin feature to manage employee data, including creating, deleting, and editing employee information.


## Features

- Search for extensions based on employee name, last name, or extension number.
- Admin functionality to manage employee data:
  - Create new employees with their name, last name, extension, email, department, and office code.
  - Delete existing employees from the system.
  - View a list of all employees along with their details.
  - Edit employee information, including name, last name, extension, email, department, and office code.

## Technologies Used

- **NestJS:** A progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.
- **TypeScript:** A strongly-typed superset of JavaScript that enhances the development experience.
Jest: A testing framework for JavaScript and TypeScript applications.
- **HTTP Module:** NestJS built-in module for making HTTP requests.
- **OpenAPI (Swagger):** Used for documenting the RESTful API and providing an interactive API explorer.

## Project Structure

- `src/admin`: Contains the admin module and services related to managing employee data.
- `src/models`: Defines the data models used in the application.
- `src/search`: Contains the search module and services related to searching for extensions.
- `src/app.module.ts`: The root module of the application that ties all modules together.
- `src/main.ts`: The entry point of the application.

## Installation and Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/employee-extension-search.git
cd employee-extension-search
```
2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run start
```

## Access the API documentation:

After starting the application, you can access the API documentation (Swagger UI) at http://localhost:3000/api/. The Swagger UI provides an interactive interface to explore and test the API endpoints.

## Endpoints

### AdminController


#### Get All Employees

- **Description**: Get a list of all employees registered in the office.
- **Method**: GET
- **URL**: /admin/employees
- **Successful Response** (status code 200):
  ```json
  [
    {
      "id": 32154soper#54932s,
      "CompleteName": "John Felipe Martinez",
      "extension": "123",
      "email": "john@gmail.com",
      "department": "Sales",
      "officeCode": "CD01"
    },
    ...
  ]

#### Get Employee by ID

- **Description**: Get a specific employee by their ID.
- **Method**: GET
- **URL**: /admin/employees/{id}
- **URL Parameters**:
  - `id` (number) - The ID of the employee to retrieve.
- **Successful Response** (status code 200):
```json
{
  "id": 32154soper#54932s,
  "CompleteName": "John Felipe Martinez",
  "extension": "123",
  "email": "john@gmail.com",
  "department": "Sales",
  "officeCode": "CD01"
}
```
- **Error Response** (status code 404):
```json
{
  "message": "Employee not found",
  "statusCode": 404
}
```
#### Create New Employee

- **Description**: Create a new employee in the office.
- **Method**: POST
- **URL**: /admin/employees
- **Request Body:**
```json
{
  "id": 32154soper#54932s,
  "CompleteName": "John Felipe Martinez",
  "extension": "123",
  "email": "john@gmail.com",
  "department": "Sales",
  "officeCode": "CD01"
}
```
- **Successful response** (status code 200):
```json
{
  "id": 32154soper#54932s,
  "CompleteName": "John Felipe Martinez",
  "extension": "123",
  "email": "john@gmail.com",
  "department": "Sales",
  "officeCode": "CD01"
}
```
#### Update Employee
- **Description**: Update information of an existing employee.
- **Method**: PUT
- **URL**: /admin/employees/{id}
- **URL Parameters**:
  - `id` (number) - The ID of the employee to update
- **Request Body:**
```json
{
  "CompleteName": "John Felipe Martinez",
  "extension": "456",
  "email": "jane@gmail.com",
  "department": "Marketing",
  "officeCode": "CD02"
}
```
- **Successful response** (status code 200):
```json
{
  "id": 32154soper#54932s,
  "CompleteName": "John Felipe Martinez",
  "extension": "456",
  "email": "jane@gmail.com",
  "department": "Marketing",
  "officeCode": "CD02"
}
```
- **Error Response** (status code 404):
```json
{
  "message": "Employee not found",
  "statusCode": 404
}
```
#### Delete Employee

- **Description**: Delete an employee from the office.
- **method**: DELETE
- **URL**: /admin/employees/{id}
- **URL Parameters**:
  - `id` (number) - The ID of the employee to delete.
- **Successful Response** (status code 200):
```json
{
  "id": 32154soper#54932s,
  "CompleteName": "John Felipe Martinez",
  "extension": "456",
  "email": "jane@gmail.com",
  "department": "Marketing",
  "officeCode": "CD02"
}
```
- **Respuesta de error** (código 404):
```json
{
  "message": "Employee not found",
  "statusCode": 404
}
```
## SearchController

#### Find Employees Extensions

- **Descripción**: Find employees by name, last name, extension, department, officeCode.
- **Método**: GET
- **URL**: /search
- **URL Parameters**:
  - `name` (string) - The name of the employee to search for (optional).
  - `lastName` (string) - The last name of the employee to search for (optional).
  - `email` (string) - The email of the employee to search for (optional).
  - `department` (string) - The department of the employee to search for (optional).
  - `oficeCode` (string) - The office code of the employee to search for (optional).  
- **Sucessful Response** (status code 200):
  ```json
  [
    {
      "id": 32154soper#54932s,
      "CompleteName": "John Felipe Martinez",
      "extension": "123",
      "email": "john@gmail.com",
      "department": "Sales",
      "officeCode": "CD01"
    },
    ...
  ]

## Running Tests

To run the test suite, execute the following command:

```bash
npm run test
```

## Contributing

If you would like to contribute to this project, feel free to open issues, submit pull requests, or provide feedback.

## Author
Camilo Maria

