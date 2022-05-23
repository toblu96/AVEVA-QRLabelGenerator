import { nanoid } from 'nanoid'
import lowDb from "../config/lowDB.js";

// Get all groups 
export const getS2AGroups = async (req, res) => {
    try {
        await lowDb.read()
        const groups = lowDb.data.groups
        res.send(groups);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Get one specific group
export const getS2AGroupsById = async (req, res) => {
    try {
        await lowDb.read()
        const group = lowDb.data.groups.find(x => x.id === req.params.id)
        group ? res.send(group) : res.status(404).json({ error: "Could not find group with id " + req.params.id })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Add a new group
export const addS2AGroup = async (req, res) => {
    try {
        // validate body
        if (!req.body.groupName) {
            res.status(400).json({ error: "You have to specify a body.groupName to crate a new group" });
            return
        }

        await lowDb.read()
        const group = { id: nanoid(10), groupName: req.body.groupName, s2aActions: [] }
        lowDb.data.groups.push(group)
        await lowDb.write()
        res.send(group)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Edit a group
export const editS2AGroup = async (req, res) => {
    try {
        // validate body
        if (!req.body.groupName) {
            res.status(400).json({ error: "You have to specify a body.groupName to edit a group" });
            return
        }

        await lowDb.read()
        const group = lowDb.data.groups.find(x => x.id === req.params.id)
        if (group) {
            lowDb.data.groups.find(x => x.id === req.params.id).groupName = req.body.groupName

            //lowDb.data.groups = lowDb.data.groups.filter(obj => obj.id != req.params.id)
            await lowDb.write()
            res.send(group)
        } else {
            res.status(404).json({ error: "You have to provide a valid id to edit a group" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Delete a group
export const deleteS2AGroup = async (req, res) => {
    try {
        await lowDb.read()
        const group = lowDb.data.groups.find(x => x.id === req.params.id)
        if (group) {
            lowDb.data.groups = lowDb.data.groups.filter(obj => obj.id != req.params.id)
            await lowDb.write()
            res.send(group)
        } else {
            res.status(404).json({ error: "You have to provide a valid id to delete a group" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Add Action to group
export const addS2AActionToGroup = async (req, res) => {
    try {
        // validate body
        if (!req.body.actionName || !req.body.actionValue) {
            res.status(400).json({ error: "You have to specify a body.actionName and a body.actionValue to crate an new action" });
            return
        }

        await lowDb.read()
        const group = lowDb.data.groups.find(x => x.id === req.params.id)
        if (group) {
            const actionItem = { id: nanoid(10), actionName: req.body.actionName, actionValue: req.body.actionValue }
            lowDb.data.groups.find(x => x.id === req.params.id).s2aActions.push(actionItem)
            await lowDb.write()

            res.send(actionItem)
        } else {
            res.status(404).json({ error: "You have to provide a valid id to add an action to a group" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Edit Action
export const editS2AAction = async (req, res) => {
    try {
        // validate body
        if (!req.body.actionName || !req.body.actionValue) {
            res.status(400).json({ error: "You have to specify a body.actionName and a body.actionValue to edit an action" });
            return
        }

        await lowDb.read()

        // catch invalid url params
        const group = lowDb.data.groups.find(x => x.id === req.params.id)
        if (!group) {
            res.status(404).json({ error: "You have to provide a valid group id to edit an action" })
            return
        }

        const action = lowDb.data.groups.find(x => x.id === req.params.id).s2aActions.find(x => x.id === req.params.actionId)
        if (!action) {
            res.status(404).json({ error: "You have to provide a valid action id to edit an action" })
            return
        }

        lowDb.data.groups.find(x => x.id === req.params.id).s2aActions.find(x => x.id === req.params.actionId).actionName = req.body.actionName
        lowDb.data.groups.find(x => x.id === req.params.id).s2aActions.find(x => x.id === req.params.actionId).actionValue = req.body.actionValue

        await lowDb.write()
        res.send(lowDb.data.groups.find(x => x.id === req.params.id).s2aActions.find(x => x.id === req.params.actionId))

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}

// Delete Item by Id
export const deleteS2AAction = async (req, res) => {
    try {
        await lowDb.read()

        // catch invalid url params
        const group = lowDb.data.groups.find(x => x.id === req.params.id)
        if (!group) {
            res.status(404).json({ error: "You have to provide a valid group id to delete an action" })
            return
        }

        const action = lowDb.data.groups.find(x => x.id === req.params.id).s2aActions.find(x => x.id === req.params.actionId)
        if (!action) {
            res.status(404).json({ error: "You have to provide a valid action id to delete an action" })
            return
        }

        lowDb.data.groups.find(x => x.id === req.params.id).s2aActions = lowDb.data.groups.find(x => x.id === req.params.id).s2aActions.filter(x => x.id != req.params.actionId)
        await lowDb.write()
        res.send(action)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.toString() });
    }
}