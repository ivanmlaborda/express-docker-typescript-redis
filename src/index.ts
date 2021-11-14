/**
 * Required External Modules
 */

import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'

import router from './routes'

/**
 * App Variables
 */

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)
const app: Application = express()

/**
 *  App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api', router)

/**
 * Server Activation
 */

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))
