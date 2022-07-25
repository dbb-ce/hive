const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello Hive', data: req.query })
})

app.get('/users', (req, res) => {
  res.json({ message: `List of Users`, data: [{ id: 1, name: 'John Doe' }] })
})

app.get('/users/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `User Details of ID #${id}`, data: { id, name: 'John Doe' } })
})

app.use((req, res, next) => {
  res.status(404).json({ message: 'Invalid API resource' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
