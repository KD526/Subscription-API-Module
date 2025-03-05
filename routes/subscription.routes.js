import {Router} from 'express'

const subscriptionRouter = Router()

subscriptionRouter.post('/', (req, res) => res.send({title: 'GET all subscription'}))
subscriptionRouter.post('/', (req, res) => res.send({title: 'Sign in'}))
subscriptionRouter.post('/', (req, res) => res.send({title: 'Sign out'}))

export default subscriptionRouter;