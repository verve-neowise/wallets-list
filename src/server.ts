import express from 'express'
import cors from 'cors'

import { accessProtector, errorHandler, logger } from './middlewares'
import routes from './routes'

const app = express()

app.use(accessProtector())

app.use(cors({
    credentials: true,
    allowedHeaders: '*'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(logger())

app.use('/api/v1', routes)

app.use(errorHandler())

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Server started on port " + port)
})