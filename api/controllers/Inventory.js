// Import Model
import Inventory from "../models/Inventory.js";

// Get all inventory items
export const getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findAll({ include: ["storageEnt"] });
        res.send(inventory);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Get inventory item by row_id
export const getInventoryItemByRowId = async (req, res) => {
    try {
        const inventory = await Inventory.findAll({
            where: {
                row_id: req.params.id
            },
            include: ["storageEnt"]
        });
        res.send(inventory[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}