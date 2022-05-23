// Import Model
import Items from "../models/Item.js";

// Get all items
export const getItems = async (req, res) => {
    try {
        const items = await Items.findAll();
        res.send(items);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Get item by id
export const getItemById = async (req, res) => {
    try {
        const item = await Items.findAll({
            where: {
                item_id: req.params.id
            }
        });
        res.send(item[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}