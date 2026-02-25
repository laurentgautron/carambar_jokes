import { getAllJokes, getOneJoke, getRandomJoke,  addJoke} from "../controllers/joke.controller.js";
import { Router } from "express";

const router = Router();

router.get('/', getAllJokes);
router.get('/random', getRandomJoke);
router.get('/:id', getOneJoke);
router.post('/', addJoke);

export default router;
