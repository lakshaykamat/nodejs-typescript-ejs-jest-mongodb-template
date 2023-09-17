<<<<<<< HEAD
import Express  from "express";
import exampleRoute from "./routes/exampleRoute.js";
const app = Express()
const PORT = 8080

app.use('/', exampleRoute);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(PORT,()=>console.log("Server is listening on port 8080"))
=======
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
>>>>>>> main
