import express from 'express'

const app = express()
app.get('/', (req, res) => res.send('Hello World !'))
app.get('/test', (req, res) => res.send('test'))
app.listen(8080, () => console.log('Node.js app listening on port 8080.'))