import { Sequelize } from "sequelize";

import db from "../config/database.js";

import Entities from "../models/Entities.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Inventory = db.define('item_inv', {
    ent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    item_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lot_no: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sublot_no: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    grade_cd: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status_cd: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    qty_left: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    qty_left_erp: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    uom_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    date_in_utc: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_in_local: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_out_utc: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    date_out_local: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    wo_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    oper_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    seq_no: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
        primaryKey: true,
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});

// model relations
Inventory.belongsTo(Entities, {
    foreignKey: "ent_id",
    as: "storageEnt"
})

export default Inventory