import app from "./app.js";
import sequelize from "./src/config/database.js";

const port = 3000;

const startserver = async () => {
    try {
        await sequelize.authenticate()
            .then(() => console.log('La connexion avec la BDD est bien établie !'))
            .catch(error => console.log(`La conexion avec la BDD a échoué: ${error}`));
        await sequelize.sync()
            .then(() => console.log('BDD synchronisée'))
            .catch(error => console.log(`La BDD n'est pas synchronisée: ${error}`));

        app.listen(port, () => console.log(`Serveur démarré sur http://localhost:${port}/api/v1/jokes`));
    } catch (error) {
        console.log(`Le serveur n'a pas démarré: ${error}`);
    }
}

startserver();