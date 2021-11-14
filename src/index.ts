import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'

import router from './routes'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)
const app: Application = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))
