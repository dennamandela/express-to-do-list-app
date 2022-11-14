# Web Service & RESTful API for ToDoList Application
## Tech Stack 
- Javascript
- NodeJS
- ExpressJs
- MySQL
- Sequelize ORM

## TODO Tasks
- CRUD Todolist
- User Register
- User Login
- User Authorization

## Requirement

For running this project please install nodejs and mysql.

## Getting Started to the development
- Clone the repository:
```
git clone https://github.com/dennamandela/express-to-do-list-app.git
```
- Switch to the repo folder:
```
cd express-to-do-list-app
```
- Install all the dependencies using npm or you can using yarn:
```
npm install or yarn install
```
- Set configuration database like on your environment system,to the config file on mode development in file config/config.json :
```
"development": {
    "username": "root",
    "password": "",
    "database": "todolist",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```
- Run the server:
```
npm run start
```

You can now access the server at http://localhost:3500
