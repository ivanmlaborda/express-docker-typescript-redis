import { Request, Response, NextFunction } from 'express'

import QuotesServices from '../../services/quotes/quotesServices'

const getQuotesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const api = new QuotesServices()
    const quote = await api.getRandomQuote()
    res.status(200).send({ data: quote })
  } catch (err) {
    res.status(404).send(err)
  }
}

export default getQuotesController
