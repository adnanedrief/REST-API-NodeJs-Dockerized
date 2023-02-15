# Node.js REST API with Docker
This is a  Node.js REST API for Employee management. The application has been Dockerized to make it easier to deploy and run in different environments.

## Prerequisites
Make sure you have the following installed on your system:
- Docker

## Getting started
1.  Clone the repository
 ```shell
git clone https://github.com/adnanedrief/REST-API-NodeJs-Dockerized.git
```
2. Navigate to the project directory:
```shell
cd REST-API-NodeJs-Dockerized
```
3. Build the Docker image
```shell
docker build -t rest-api-nodejs-dockerized .
```
4. Run the Docker container
```shell
docker run -p 3001:3000 rest-api-nodejs-dockerized
```
Open your web browser and go to http://localhost:3001/employees to see the list of employees.

## API Endpoints
The application provides the following API endpoints:

- **GET /employees** : Returns a list of all employees.
- **GET /employees/:id** : Returns the employee with the specified id.
- **POST /employees** : Adds a new employee.
- **DELETE /employees/:id** : Deletes the employee with the specified id.


## Technologies
The following technologies have been used in this application:
- Node.js
- Express
- Docker
