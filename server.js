import app from "./app.js";
import sequelize from "./src/config/database.js";

const port = process.env.PORT || 3000;

const startserver = async () => {
    try {
        await sequelize.authenticate()
            .then(() => console.log('La connexion avec la BDD est bien établie !'))
            .catch(error => console.log(`La conexion avec la BDD a échoué: ${error}`));
        await sequelize.sync()
            .then(() => console.log('BDD synchronisée'))
            .catch(error => console.log(`La BDD n'est pas synchronisée: ${error}`));

        app.listen(port, "0.0.0.0", () => console.log(`Serveur démarré sur le port ${port}`));
    } catch (error) {
        console.log(`Le serveur n'a pas démarré: ${error}`);
    }
}

startserver();