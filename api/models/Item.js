import { Sequelize } from "sequelize";

import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Items = db.define('item', {
    item_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    item_desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_class_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uom_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    num_decimals: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    last_edit_comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_edit_by: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_edit_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    row_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});

export default Items