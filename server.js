const express = require('express')
const cors = require('cors')
const students = require('./students')
const courses = require('./courses')

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