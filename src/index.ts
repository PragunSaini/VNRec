import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('VNRec!!')
})

app.listen(8000, () => console.log('Listening at POST 8000...'))
