import express from 'express';

import { PORT } from './config/env.js'

const app = express()

app.get('/', (req, res) => {
    res.send('API tracker is set!')
})

//listen to server port
app.listen(PORT, () => {
    console.log(`API tracker running on http://localhost:${PORT}`)
})

export default app;