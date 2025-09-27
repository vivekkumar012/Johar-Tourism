import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db';

dotenv.config();
const app = express();


app.use(express.json());

app.use("/api/v1/user", )
app.use()

connectDB();

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening on port${port}`);
})