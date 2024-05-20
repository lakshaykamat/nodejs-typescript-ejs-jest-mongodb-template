import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path,{ dirname } from "path"
import dbConnect from "./db/index.js"
import { fileURLToPath } from 'url';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an Express application
const app = express();
dbConnect()

// Middleware for logging HTTP requests
app.use(morgan('dev'));


// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/",routes)

// Start the server
const PORT: number = parseInt(process.env.PORT || '3000');
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});