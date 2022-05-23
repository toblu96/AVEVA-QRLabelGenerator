import { Sequelize } from "sequelize";

import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Entities = db.define('ent', {
    ent_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    parent_ent_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    site: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    can_sched_jobs: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    can_run_jobs: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    can_track_oee: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    can_store: {
        type: DataTypes.BOOLEAN,
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
    ent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});

export default Entities