import express, { type Request, type Response} from 'express'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
   res.send('Hello, TypeScript Express!')
})

app.listen(port, () => {
   console.log(`[server]: Server running at http://localhost:${port}`)
})