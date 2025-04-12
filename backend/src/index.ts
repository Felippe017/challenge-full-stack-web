import express from 'express';
import cors from 'cors'
import studentsRouter from './routes/students'

const app = express()
const port = 8000


app.use(express.json())
app.use(cors())

app.get("/healthcheck", (_req, res) => {
  res.send("API is up and running!");
});

app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
