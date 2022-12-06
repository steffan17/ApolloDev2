const { getTables } = require("../src/backend/db")
const db = require(`../src/backend/db`)

const api = {

testFunc: (req, res)=>
{
    const tableName = req.query.tableName
    db.createTable(tableName)
    for(let i=0; i<=20; i++)
    {
        const name = `nazwa${i}`
        db.addSomeData(tableName, i, name)
    }
    res.send(`OK`)
    console.log(`testing...`)
},

getTables: (req, res) =>
{
    res.send(db.getTables())
},

getTable: (req,res) =>
{
    const tableName = req.query.tableName
    res.send(db.getTable(tableName))
}

}

module.exports = api