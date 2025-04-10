import express, { Request, Response } from 'express';
import { prisma } from './lib/prisma';

const app = express()
const port = 3000


app.use(express.json())

app.get('/students', async (req: Request, res: Response) => {
    const users = await prisma.students.findMany()
    res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})