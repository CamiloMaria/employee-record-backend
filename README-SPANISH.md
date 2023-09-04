# Búsqueda de Extensiones de Empleados - Proyecto NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  
## Descripcion

Este repositorio contiene un proyecto basado en NestJS para implementar una aplicación de Búsqueda de Extensiones de Empleados. La aplicación permite a los empleados buscar las extensiones de sus colegas dentro de la oficina. También incluye una funcionalidad de administrador para gestionar los datos de los empleados, lo que incluye crear, borrar y editar la información de los empleados.

## Features

- Búsqueda de extensiones según el nombre, apellido o número de extensión del empleado.
- Funcionalidad de administrador para gestionar los datos de los empleados:
    - Crear nuevos empleados con su nombre, apellido, extensión, correo electrónico, departamento y código de oficina.
    - Borrar empleados existentes del sistema.
    - Ver una lista de todos los empleados junto con sus detalles.
    - Editar la información de los empleados, incluyendo nombre, apellido, extensión, correo electrónico, departamento y código de oficina.

## Tecnologías Utilizadas

- **NestJS:** Un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes, escalables y mantenibles.
- **TypeScript:** A strongly-typed superset of JavaScript that enhances the development experience.
Jest: A testing framework for JavaScript and TypeScript applications.
- **HTTP Module:** Un framework de pruebas para aplicaciones JavaScript y TypeScript.
- **OpenAPI (Swagger):** Se utiliza para documentar la API RESTful y proporcionar un explorador interactivo de la API.

## Estructura del Proyecto

- `src/admin`: Contiene el módulo de administración y los servicios relacionados con la gestión de datos de los empleados.
- `src/models`: Define los modelos de datos utilizados en la aplicación.
- `src/search`: Contiene el módulo de búsqueda y los servicios relacionados con la búsqueda de extensiones.
- `src/app.module.ts`: El módulo raíz de la aplicación que une todos los módulos juntos.
- `src/main.ts`: El punto de entrada de la aplicación.

## Instalación y Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/your-username/employee-extension-search.git
cd employee-extension-search
```
2. Instalar las dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
npm run start
```

## Acceder a la documentación de la API:

Después de iniciar la aplicación, puedes acceder a la documentación de la API (Swagger UI) en http://localhost:3000/api/. El Swagger UI proporciona una interfaz interactiva para explorar y probar los puntos finales de la API.

## Endpoints

### AdminController

#### Obtener todos los empleados

- **Descripción**: Obtiene una lista de todos los empleados registrados en la oficina.
- **Método**: GET
- **URL**: /admin/employees
- **Respuesta exitosa** (código 200):
  ```json
  [
    {
      "id": 1,
      "name": "John",
      "lastName": "Doe",
      "extension": "123",
      "email": "john@gmail.com",
      "department": "Sales",
      "officeCode": "CD01"
    },
    ...
  ]

#### Obtener un empleado por su ID

- **Descripción**: Obtiene un empleado específico por su ID.
- **Método**: GET
- **URL**: /admin/employees/{id}
- **Parámetros de URL**:
  - `id` (number) - El ID del empleado a obtener.
- **Respuesta exitosa** (código 200):
```json
{
  "id": 1,
  "name": "John",
  "lastName": "Doe",
  "extension": "123",
  "email": "john@gmail.com",
  "department": "Sales",
  "officeCode": "CD01"
}
```
- **Respuesta de error** (código 404):
```json
{
  "message": "Employee not found",
  "statusCode": 404
}
```
#### Crear un nuevo empleado

- **Descripción**: Crea un nuevo empleado en la oficina.
- **Método**: POST
- **URL**: /admin/employees
- **Cuerpo de la solicitud:**
```json
{
  "id": 1,
  "name": "John",
  "lastName": "Doe",
  "extension": "123",
  "email": "john@gmail.com",
  "department": "Sales",
  "officeCode": "CD01"
}
```
- **Respuesta exitosa** (código 200):
```json
{
  "id": 1,
  "name": "John",
  "lastName": "Doe",
  "extension": "123",
  "email": "john@gmail.com",
  "department": "Sales",
  "officeCode": "CD01"
}
```
#### Actualizar un empleado

- **Descripción**: Actualiza la información de un empleado existente.
- **Método**: PUT
- **URL**: /admin/employees/{id}
- **Parámetros de URL**:
  - `id` (number) - El ID del empleado a actualizar.
- **Cuerpo de la solicitud:**
```json
{
  "name": "Jane",
  "lastName": "Smith",
  "extension": "456",
  "email": "jane@gmail.com",
  "department": "Marketing",
  "officeCode": "CD02"
}
```
- **Respuesta exitosa** (código 200):
```json
{
  "id": 1,
  "name": "Jane",
  "lastName": "Smith",
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
#### Eliminar un empleado

- **Descripción**: Elimina un empleado de la oficina.
- **Método**: DELETE
- **URL**: /admin/employees/{id}
- **Parámetros de URL**:
  - `id` (number) - El ID del empleado a eliminar.
- **Respuesta exitosa** (código 200):
```json
{
  "id": 1,
  "name": "Jane",
  "lastName": "Smith",
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

#### Obtener extension empleado

- **Descripción**: Busca empleados por nombre, apellido o extensión o email o departamento o codigo de oficina.
- **Método**: GET
- **URL**: /search
- **Parámetros de URL**:
  - `name` (string) - El nombre del empleado a buscar (opcional).
  - `lastName` (string) - El apellido del empleado a buscar (opcional).
  - `email` (string) - La extensión del empleado a buscar (opcional).
  - `department` (string) - El departamento del empleado a buscar (opcional).
  - `oficeCode` (string) - El codigo de oficina del empleado a buscar (opcional).  
- **Respuesta exitosa** (código 200):
  ```json
  [
    {
      "id": 1,
      "name": "John",
      "lastName": "Doe",
      "extension": "123",
      "email": "john@gmail.com",
      "department": "Sales",
      "officeCode": "CD01"
    },
    ...
  ]



## Ejecución de Pruebas

Para ejecutar el conjunto de pruebas, ejecuta el siguiente comando:

```bash
npm run test
```

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de abrir problemas, enviar pull request o proporcionar comentarios.

## Autor
Camilo Maria

