import 'dotenv/config'
import Express , { Request, Response }from "express";
import database from './db/index.js'
import exampleRouter from './routes/index.js'
const app = Express()
database()
const PORT = 8080


/******* EJS Routes*********/
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', async (req: Request, res: Response) => {
    try {
      const testApiResponse = await fetch('http://localhost:8080/api/v1/test');
      if (testApiResponse.ok) {
        //?Look Here
        //@ts-ignore
        const testApiData: { status: string } = await testApiResponse.json();
        const message = testApiData.status;
        res.render('index', { message });
      } else {
        console.error('Error while calling /api/v1/test:', testApiResponse.statusText);
        res.status(500).send('Internal Server Error');
      }
    } catch (error) {
      console.error('Error while calling /api/test:', error);
      res.status(500).send('Internal Server Error');
    }
  });


app.use('/api/v1/',exampleRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});