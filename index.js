import express from 'express';
import connectDB from './db/database.js';
import urlRouter from './routes/url.routes.js';
import authRouter from './routes/auth.routes.js';
import dotenv from 'dotenv'

//env variable setup
dotenv.config()

//Database connection
const DB_URL = process.env.MONGO_URL
connectDB(DB_URL)

// App initialization
const app = express();

//middlewares
app.use(express.json())

//routes
app.use("/", urlRouter)
app.use("/auth", authRouter)

//listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
