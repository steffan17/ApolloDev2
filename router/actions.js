const { getTables } = require("../src/backend/db")
const db = require(`../src/backend/db`)

const api = {

testFunc: (req, res)=>
{
    db.createTable()
    res.send(`OK`)
    console.log(`testing...`)
},

getTables: (req, res) =>
{
    res.send(db.getTables())
}

}

module.exports = api