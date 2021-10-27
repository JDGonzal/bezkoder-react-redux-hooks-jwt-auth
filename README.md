# Learning Node, Express, React JS , MySQL  JWTfull stack web development

## Learn to create a full stack web application from scratch using React, Redux, Hooks and JWT Authorization 

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
  my-app-ui:[Node.js Express: JWT example | Token Based Authentication & Authorization](https://www.bezkoder.com/node-js-jwt-authentication-mysql/)

1. Create a directory called "api" and get in
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

7. Will use a "sequelize", installed in step 3, to access the DB and all CRUD sequences <br />
  After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:
  * create a new User: create(object)
  * find a User by id: findByPk(id)
  * find a User by email: findOne({ where: { email: ... } })
  * get all Users: findAll()
  * find all Users by username: findAll({ where: { username: ... } })
  These functions will be used in our Controllers and Middlewares.<br />
  For more details, please visit [API Reference for the Sequelize constructor](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor).

8. Tables that we define in models package will be automatically generated in MySQL Database.<br />
  If you check the database, you can see things like this:
  ```sql
  describe users;
  describe roles;
  describe user_roles;
  select * from roles;
  ```

9. If you don't use initial() function in Sequelize sync() method. You need to run following SQL script:
  ```sql
  INSERT INTO roles VALUES (1, 'user', now(), now());
  INSERT INTO roles VALUES (2, 'moderator', now(), now());
  INSERT INTO roles VALUES (3, 'admin', now(), now());
  ```

10. You must complete those:
  * Configure Auth Key
  * Create Middleware functions
  * Controller for Authentication
  * Controller for testing Authorization
  * Define Routes

11. You could test with Postman (step 3 in "Steps to start for all") using the example of the picture, <br />
  but I added some verification in password strength and length of fields.<br />
  Also remember the port is 49146 (http://localhost:49146/api/auth/signup).<br />
  ![alt text](https://www.bezkoder.com/wp-content/uploads/2020/01/node-js-jwt-authentication-mysql-signup-new-user.png)

12. Complete all tests, and get the answer of each one.

## Steps to work the MY-APP-UI with REACT
  api: [React Redux Login, Logout, Registration example with Hooks](https://www.bezkoder.com/react-hooks-redux-login-registration-example/)

1. From the root, run this command
```bash
  npx create-react-app my-app-ui
```

2. Change to the aplication directory
```bash
  cd ./my-app-ui
```

3. Install with npm the "react-router-dom".<br />
  Best JavaScript code snippets using react-router-dom.
  ```bash
  npm install react-router-dom --save
  ```

4. Install into the"Visual Studio Code" editor, the extension called "Code Autocomplete" by "Benas Svipas"

5. Import "Boostrap".<br />
  Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.<br />
  Bootstrap 5 is the newest version of Bootstrap. [What is Boostrap](https://www.w3schools.com/whatis/whatis_bootstrap.asp)
  ```bash
  npm install bootstrap --save
  ```
  Open src/App.js and modify the code inside it as following-
  ```node
  import React from "react";
  import "bootstrap/dist/css/bootstrap.min.css";

  const App = () => {
    // ...
  }

  export default App;
  ```
6. Create an Structure like this: <br />
  ![alt text](https://www.bezkoder.com/wp-content/uploads/2020/09/react-redux-login-registration-example-project-structure.png)

  
7. If is necessary for get the files of new directory "my-app-ui" available in git for upload to repository, <br />
  delete into "my-app-ui" the ".git" and ".gitignore", remeber both are inside the "my-app-ui" directory.

8. Before working with these services, we need to install Axios with command: <br />
  Axios is a promise based HTTP client for the browser and Node. js.  <br />
  Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.<br />
  It can be used in plain JavaScript or with a library such as Vue or React.
  ```bash
  npm install axios --save
  ```

9. Now we need to install Redux, Thunk Middleware and Redux Devtool Extension.<br />
The redux npm package includes precompiled production and development UMD builds in the dist folder.<br />
They can be used directly without a bundler and are thus compatible with many popular <br />
JavaScript module loaders and environments. Run the command:
```bash
npm install redux redux-thunk --save
npm install --save-dev redux-devtools-extension
```

10. Create React Pages for Authentication. Finally pages with GUI
  In src folder, create new folder named "components" and add several files as following:
  - Login.js
  - Register.js
  - Profile.js

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

