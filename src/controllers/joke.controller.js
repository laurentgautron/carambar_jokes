import Jokes from "../models/joke.js";

export const getAllJokes = async (req, res) => {
    try {
        const jokes = await Jokes.findAll();
        const message = 'Toutes les blagues ont été chargées !';
        res.json({message: message, data: jokes});
    } catch (error) {
        const message = 'Les blagues n\'ont pas été chargées. Réessayez plus tard !';
        res.status(500).json({message: message, data: error});
    }
};

export const getOneJoke = async (req, res) => {
    try {
        const joke = await Jokes.findByPk(req.params.id);
        if (joke === null) {
            const message = `La blaque avec l'identifiant n°${req.params.id} n'existe pas !`;
            res.status(404).json({message: message});
        } else {
            const message = `La blague avec l'identifiant n° ${req.params.id} a été trouvée !`;
            res.json({message: message, data: joke});
        };
        
    } catch (error) {
        const message = `La blague avec l'identifiant n°${req.params.id} n'a pas été trouvée !`;
        re;s.status(500).json({message: message, data: error});
    }
};

export const addJoke = async (req, res) => {
    try {
        const joke = await Jokes.create({...req.body});
        const message = 'La blague a bien été crée !';
        res.json({message: message, data: joke});
    } catch (error) {
        const message = 'La blague n\'a pas pu être crée. Réessayez plus tard';
        res.status(500).json({message: message, data: error});
    }
};

export const getRandomJoke = async (req, res) => {
    try {
        const nb_jokes = await Jokes.count();
        if (nb_jokes === 0) {
            const message = 'Il n\'y a pas de blagues disponibles !';
            res.status(404).json({message: message});
        } else {
            const joke_id = Math.floor(Math.random() * nb_jokes);
            const joke = await Jokes.findOne({offset: joke_id});
            const message = 'Une blague a été trouvée !';
            res.json({message: message, data: joke});
        };
    } catch (error) {
        const message = 'Aucune blague n\'a pu être trouvée. Réessayez plus tard';
        res.json({message: message, data : error});
    };
};