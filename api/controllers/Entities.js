// Import Model
import Entities from "../models/Entities.js";

// Get all entities
export const getEntities = async (req, res) => {
    try {
        const entities = await Entities.findAll();
        res.send(entities || {});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Get all storage entities
export const getStorageEntities = async (req, res) => {
    try {
        const entities = await Entities.findAll({
            where: {
                can_store: 1
            }
        });
        res.send(entities || {});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Get storage entity by id
export const getStorageEntityById = async (req, res) => {
    console.log(req.params.id)
    try {
        const entity = await Entities.findAll({
            where: {
                can_store: 1,
                ent_id: req.params.id,
            }
        });
        res.send(entity[0] || {});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}