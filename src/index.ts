import express, { type Application } from 'express'
import { routes } from './routes'

const app: Application = express()
const port = process.env.PORT || 8000

app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
   console.log(`[server]: 🚀 Server is running at http://localhost:${port} 🚀`)
})