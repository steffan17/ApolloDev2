const express = require('express')
const router = express.Router();
const api = require(`./actions`)

router.get('/api/', (req, res)=>{res.send('TestFunk')});
router.get('/api/test', api.testFunc);

module.exports = router; 