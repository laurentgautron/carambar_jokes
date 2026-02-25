import express from "express";
import router from "./src/routes/joke.routes.js";
import morgan from "morgan";

const app = express();
const port = 3000

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/jokes', router);

export default app;
