import express from 'express';
import studentsRouter from './routes/students'

const app = express()
const port = 3000


app.use(express.json())

app.get("/healthcheck", (_req, res) => {
  res.send("API is up and running!");
});

app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
