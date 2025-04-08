import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routers/index.router.js';


// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module
const __dirname = dirname(__filename);

// Create an instance of express
const app = express();

// Set the port for the server
const port = 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data (from forms)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data (from APIs)
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Set up Handlebars view engine
app.engine("hbs", engine({ extname: ".hbs" }));

// Set Handlebars as the default template engine
app.set("view engine", "hbs");

// Set views directory
app.set('views', path.join(__dirname, 'resources/views'));

router(app);

// Example route for a form submission
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});
