import express from 'express';
import db from './config/Database.js';
import router from './routes/route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
    console.log('Server running at port 5000');
});
