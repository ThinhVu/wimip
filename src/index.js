const express = require('express')
const cors = require('cors')
const packageJson = require('../package.json')

const app = express()
app.use(cors())

const counter = {
  ip: 0,
  header: 0
}

app.get('/', async (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head>

</head>
<body>
  <p>Version: ${packageJson.name}-${packageJson.version}</p>
  <p>Usage:
    <ul>
      <li><a href="/ip">/ip</a>: to get your public IP address</li>
      <li><a href="/header">/header</a>: to get http request header</li>
    </ul>
  </p>
  <p>Analysis:
    <ul>
      <li>/ip: ${counter.ip}</li>
      <li>/header: ${counter.header}</li>
    </ul>
  </p>
  <p>Feedback: <a href="https://github.com/ThinhVu/wimip">github.com/ThinhVu/wimip</a></p>
</body>
</html>`))
app.get('/ip', async (req, res) => {
  counter.ip++
  res.send(req.headers['x-real-ip'])
})
app.get('/header', async (req, res) => {
  counter.header++
  res.json(req.headers)
})

const PORT = 8080
app.listen(PORT, () => console.log(`Listen on port ${PORT}`))
