import { log } from "node:console";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
})

sequelize.authenticate()
  .then(() => console.log("La connexion à la BDD à bien été établie !"))
  .catch( error => console.log(`La connexion à la BDD a échoué !: ${error}`));

sequelize.sync();

export default sequelize;