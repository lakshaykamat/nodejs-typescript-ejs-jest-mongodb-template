import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from "path"
import { getDirectoryName } from "./lib/index.js"
import { fileURLToPath } from 'url';
import dbConnect from "./db/index.js"
dotenv.config();



// Create an Express application
const app = express();
dbConnect()

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Set view engine and views directory
app.set('view engine', 'ejs');
const __fileName = fileURLToPath(import.meta.url)
app.set('views', path.join(getDirectoryName(__fileName), 'views'));

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