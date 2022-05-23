import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    dialectOptions: {
        instanceName: process.env.DB_INSTANCE,
        domain: 'deledomain'
    }
});

export default db;