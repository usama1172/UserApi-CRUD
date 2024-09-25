import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import UserRoute from './routes/user.route.js';
dotenv.config();

connectDb();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', UserRoute);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));