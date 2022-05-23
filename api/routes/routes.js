import express from "express";

import {
    getS2AGroups,
    getS2AGroupsById,
    addS2AGroup,
    editS2AGroup,
    deleteS2AGroup,
    addS2AActionToGroup,
    editS2AAction,
    deleteS2AAction
} from '../controllers/lowDB.js'

import {
    getInventory,
    getInventoryItemByRowId,
} from "../controllers/Inventory.js";

import {
    getItems,
    getItemById,
} from "../controllers/Item.js";

import {
    getEntities,
    getStorageEntities,
    getStorageEntityById,
} from "../controllers/Entities.js";

const router = express.Router();

// Route for all scan 2 actions
router.get('/s2a/groups', getS2AGroups);
router.get('/s2a/groups/:id', getS2AGroupsById);
router.post('/s2a/groups', addS2AGroup);
router.put('/s2a/groups/:id', editS2AGroup);
router.delete('/s2a/groups/:id', deleteS2AGroup);
router.post('/s2a/groups/:id/action', addS2AActionToGroup);
router.put('/s2a/groups/:id/action/:actionId', editS2AAction);
router.delete('/s2a/groups/:id/action/:actionId', deleteS2AAction);

// Route get all inventory items
router.get('/inventory', getInventory);
// Route get inventory item by row_id
router.get('/inventory/:id', getInventoryItemByRowId);

// Route get all inventory items
router.get('/items', getItems);
// Route get inventory item by row_id
router.get('/items/:id', getItemById);

// Entities
router.get('/entities', getEntities);
router.get('/entities/storage', getStorageEntities);
router.get('/entities/storage/:id', getStorageEntityById);

// export router
export default router;
