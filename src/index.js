const express = require('express')
const cors = require('cors')
const packageJson = require('../package.json')

const app = express()
app.use(cors())

app.get('/', async (req, res) => res.send(`${packageJson.name}-${packageJson.version}`))
app.get('/ip', async (req, res) => res.send(req.headers['x-real-ip']))
app.get('/header', async (req, res) => res.json(req.headers))

const PORT = 8080
app.listen(PORT, () => console.log('Ready'))

if (process.env.NODE_ENV !== 'production') {
  const ngrok = require('ngrok')
  ngrok.connect(PORT).then(rs => console.log(rs))
}
