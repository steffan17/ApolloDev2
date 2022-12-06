const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const apiRouter = require('./router/api')


app.engine('handlebars', expresshandlebars.engine({
    defaultLayout: 'main'
  }))

app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.use('/', apiRouter)

app.get('/db', (req,res)=>{
    var scripts = [{script: '/js/bundleDB.js'}];
    res.render('db', {title: "DB", scripts: scripts})
})

app.get('/db2', (req,res)=>{
    var scripts = [{script: '/js/bundleDB2.js'}];
    res.render('db2', {title: "DB2", scripts: scripts})
})

app.get('/', (req,res)=>{
    var scripts = [{ script: '/js/bundle.js' }];
    res.render('home', {title: 'HOME', scripts: scripts })
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Błąd serwera')
})

app.listen(port, ()=>console.log(`It's working on port: ${port}`))