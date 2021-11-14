import express from 'express'
import ExpressRedisCache from 'express-redis-cache'
import getQuotesController from './controllers/quotes/getQuotes'

const router = express.Router()
const cache = ExpressRedisCache({
  host: process.env.REDIS_HOST
})

router.get('/quotes', cache.route({ expire: 10 }), getQuotesController)

export default router
