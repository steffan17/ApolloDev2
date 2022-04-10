const db = require(`../src/backend/db`)

const api = {

testFunc: (req, res)=>
{
    res.send(db.firstFunc())
    console.log(`testing...`)
}

}

module.exports = api