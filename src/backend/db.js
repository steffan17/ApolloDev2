const Database = require('better-sqlite3')
const { name } = require('file-loader')

const db = new Database(`db.db`, { verbose: console.log })
const base = {

firstFunc: ()=>
    {
        return `Połączono z bazą danych...:-)`        
    },
getTables: ()=> 
    {
        return db.prepare('SELECT name FROM sqlite_schema').all()
    },
getTable: (tableName)=>
    {
        return db.prepare(`SELECT * FROM ${tableName}`).all()
    },




createTable: (tableName) =>
    {
        db.prepare(`CREATE TABLE IF NOT EXISTS ${tableName} (id REAL, name text )`).run()
        return `OK`
    },
addSomeData: (tableName, id, name) =>
    {
        //console.log(`INSERT INTO ${tableName} (id, name) VALUES (${id}, ${name})`)
        const stmt = db.prepare(`INSERT INTO ${tableName} (id, name) VALUES (?, ?)`)
        stmt.run(id, name)
    }
}

module.exports = base