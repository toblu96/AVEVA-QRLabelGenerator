import { join } from 'path'
import { Low, JSONFile } from 'lowdb'
import { nanoid } from 'nanoid'
const fs = require('fs');

// check if directory exists or create new one
var dir = './data';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Use JSON file for storage
const file = join(dir, 's2a_db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

async function initDB() {

    // Read data from JSON file, this will set db.data content
    await db.read()

    // return if data exists
    if (db.data) return

    db.data = { groups: [] }

    const firstId = nanoid(10)
    db.data.groups.push({ id: firstId, groupName: 'My first group!', s2aActions: [] })

    db.data.groups.find(x => x.id === firstId).s2aActions.push({ id: nanoid(10), actionName: 's2a example action', value: "L:26,A:3" })

    // Write db.data content to db.json
    await db.write()
}

initDB();

export default db
