import express from 'express';
import { PORT } from './config/env.js'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscription.routes.js';
import { url } from 'url'

const webUrl = url()

//initialize express
const app = express()
//middleware
app.use('/api/v1/users', userRouter)
app.use('api/v1/auth', authRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

app.get('/', (req, res) => {
    res.send('API tracker is set!')
})

//listen to server port
app.listen(PORT, () => {
    console.log(`API tracker running on http://localhost:${PORT}`)
})

export default app;
