import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('API tracker is set!')
})

app.listen(3000, () => {
    console.log('API tracker running on http;//localhost:3000')
})