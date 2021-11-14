import HttpClient from '../../../utils/httpClient'

export default class QuotesServices extends HttpClient {
  public constructor () {
    super('https://api.quotable.io')
  }

  public getRandomQuote = () => this.instance.get('/random');
}
