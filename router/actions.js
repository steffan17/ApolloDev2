const db = require(`../src/backend/db`)

const api = {

testFunc: (req, res)=>
{
    db.createTable()
    res.send(`OK`)
    console.log(`testing...`)
}

}

module.exports = api