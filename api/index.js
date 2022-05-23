import express from 'express'

import db from './config/database.js'
import Router from './routes/routes.js'

const app = express()

app.use(express.json());

// Testing database connection 
async function initDB() {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
initDB()

// use router
app.use(Router);


module.exports = app