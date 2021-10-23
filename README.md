# Learning Node, Express, React JS , MySQL  JWTfull stack web development

##learn to create a full stack web application from scratch using React, Redux, Hools and JWT Auth

## Steps to start for all
1. Install NPM and NODEJS in your system 
  [Nodejs Download](https://nodejs.org/en/download/current/)
2. Check in $path or %path% the nodeJS and npm are on it
  ```bash
  C:/Program Files/nodejs
  ```
3. Install Postman
  [Postman Download](https://www.postman.com/downloads/)
4. Install MySQL 5.6.x
  [MySQL Download 5.6.26](https://downloads.mysql.com/archives/community/)
5. Install Visual Studio Code
  [Visual Studio Download](https://code.visualstudio.com/insiders/)
6. Create a DB called "bezkoder" and
  You could create the DB using an script
  ```sql
    CREATE DATABASE IF NOT EXISTS bezkoder;

    USE bezkoder;
  ```

## Steps to work the API
my-app-ui:[React Redux Login, Logout, Registration example with Hooks](https://www.bezkoder.com/react-hooks-redux-login-registration-example/)

1. Create a directory called "api" and getin
  ```bash
  mkdir api
  cd ./api
  ```

2. In the working directory activate the environment:
  ```bash
    npm init -y
  ```

3. We need to install necessary modules: express, cors, sequelize, mysql2, jsonwebtoken and bcryptjs.<br />
  Express, is minimal and flexible Node.js web applicaton framework<br />
  cors,<br />
  squelize,<br />
  mysql2,<br />
  jsonwebtoken,<br />
  bcryptjs,<br />
  ```bash
  npm install express sequelize mysql2 cors jsonwebtoken bcryptjs --save
  ``` 

4 Install "nodemon" with "-D" in parameter, to not create a new element into "package.json" file.<br />
The nodemon Module is a module that develop node. js based applications by automatically restarting the node application when file changes in the directory are detected.<br />
Nodemon does not require any change in the original code and method of development.
  ```bash
 
  npm install nodemon -D 
  ```

5. Install with npm the "dotenv".<br />
  It loads environment variables from a .env file.
  ```bash
  cd ./api
  npm install dotenv --save
  ```  
  
6. Create a file into "src" a file called "server.js", this is the Structure suggested: <br />
  ![alt text](https://www.bezkoder.com/wp-content/uploads/2020/01/node-js-jwt-authentication-mysql-project-structure.png)

## Steps to work the MY-APP-UI with REACT
api: [Node.js Express: JWT example | Token Based Authentication & Authorization](https://www.bezkoder.com/node-js-jwt-authentication-mysql/)

1. From the root run this command
```bash
  npx create-react-app my-app-ui
```
2.

3.

4.

5.

6. Create an Structure like this: <br />
  ![alt text](https://www.bezkoder.com/wp-content/uploads/2020/09/react-redux-login-registration-example-project-structure.png)

## Note: Run first the API before to run the MY-APP-UI
At the end, run this command to up the API, to check in Postman 'http://localhost:49146/api/',
  ```bash
  cd ./api
  npm run dev
  ```
And run this command to up the APP, using another Terminal, to check http://localhost:3000/
  ```bash
  cd ./my-app-ui
  npm start
  ```
### If you need to check the installed "node_modules" elements, use this :
```
  npm list --depth 0
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

