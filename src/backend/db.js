const Database = require('better-sqlite3')

const db = new Database(`db.db`, { verbose: console.log })
const base = {

firstFunc: ()=>
    {
        return `Połączono z bazą danych...:-)`        
    },
createTable: () =>
    {
        db.prepare(`CREATE TABLE IF NOT EXISTS test3 (id INTEGER)`).run()
        return `OK`
    },
getTables: ()=> 
    {
        return db.prepare('SELECT name FROM sqlite_schema').all()
    }

}

module.exports = base