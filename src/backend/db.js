const Database = require('better-sqlite3')

const db = new Database(`db.db`, { verbose: console.log })
const base = {

firstFunc: ()=>
    {
        return `Połączono z bazą danych...:-)`        
    },
createTable: () =>
    {
        db.prepare(`CREATE TABLE IF NOT EXISTS test (id INTEGER)`).run()
        return `OK`
    }

}

module.exports = base