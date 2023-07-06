const express = require('express')
const cors = require('cors')
const app = express()

// Enable CORS for all routes
app.use(cors())

app.get('/node-test', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' }
  ];
  res.json(users)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})