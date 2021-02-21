# Guild Challenge: API

| Description      | URL                                                    | Method | Required Properties                      |
| ---------------- | ------------------------------------------------------ | ------ | ---------------------------------------- |
| Get all students    | http://localhost:4000/students                 | GET    | n/a                                      |
| Get student by id  | http://localhost:4000/students/:id        | GET    | n/a                                      |
| Post student | http://localhost:4000/students/        | POST    |  `{id: <integer>, name: <string>, email: <string>}`  |
| Get all courses | http://localhost:4000/courses | GET | n/a
| Get course by id | http://localhost:4000/courses/:id | GET    | n/a                                      |
| (Un)Register student | http://localhost:4000/courses/:id/register | POST   | `{id: <integer>}` |


## Technologies
+ Express.js
+ Node.js
+ Nodemon

## How To Access This Application
+ `git clone git@github.com:baileydunning/guild-sample-be.git`
+ `cd guild-sample-be`
+ `npm install`
+ `npm start`
+ Visit `localhost:4000/{endpoint}` in your browser or Postman
