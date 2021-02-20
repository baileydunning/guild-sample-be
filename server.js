const express = require('express')
const cors = require('cors')
const students = require('./students')
const courses = require('./courses')
const { response } = require('express')

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(cors())

app.locals.title = 'Course Catalog Express Server'
app.locals.students = students.data
app.locals.courses = courses.data

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.get('/students', (req, res) => {
  const allStudents = app.locals.students
  res.json({ allStudents })
})

app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id)
  const student = app.locals.students.find(student => student.id === studentId)

  if (!student) {
    return res.sendStatus(404)
  }

  res.status(200).json(student)
})

app.post('/students', (req, res) => {
  const newStudent = req.body

  for (let requiredParameter of ['id', 'name', 'email']) {
    if (!newStudent[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { id: <Integer>, name: <String>, email: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  app.locals.students.push(newStudent)
  res.status(200).json(`${newStudent.name} has been added to our records.`)
})

app.get('/courses', (req, res) => {
  const allCourses = app.locals.courses
  res.json({ allCourses })
})

app.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id)
  const course = app.locals.courses.find(course => course.id === courseId)
 
  if (!course) {
    return res.sendStatus(404)
  }

  res.status(200).json(course)
})

