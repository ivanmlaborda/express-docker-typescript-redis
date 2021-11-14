import express from 'express'
import getQuotesController from './controllers/quotes/getQuotes'

const router = express.Router()

router.get('/quotes', getQuotesController)

export default router
