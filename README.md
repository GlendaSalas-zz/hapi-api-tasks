---
# Tasks REST API with Node.js & Hapi.js
---
This will show how to set up a basic hapi server that displays a list of tasks.

## Stack
|  stack | version|
|:-------|:-------|
|Node.js|12.15.0|
|Hapi.js | 19.1.1 |
|inert.js|  6.0.1 |
|handlerbars| 4.5.3 |
|mongoose| 5.9.11 |
|path| 0.12.7 |


## Endpoints
### Read tasks [GET /tasks]
 - It will show a form to add new tasks and shows all the tasks added.
 `http://localhost:3000/tasks`
### Read tasks [POST /tasks]
- It will redirect the form to the GET /tasks endpoint

## MongoDB
It uses a local url for the connection. If you need to use it in production, don't leave it the repo, you need to use enviroment variables. This **is just an example**
