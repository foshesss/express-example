const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const port = 3000

app.use(bodyParser.json())

// this allows us to use all files in the public folder
app.use(express.static(__dirname + '/public'))

// GET, which returns the index.html page
app.get("/", (req, res) => {
    res.sendFile("public/html/index.html", { root: __dirname })
})

// GET, which returns the about.html page
app.get("/about", (req, res) => {
    res.sendFile("public/html/about.html", { root: __dirname })
})

// GET, which returns the catalog.html page
app.get("/catalog", (req, res) => {
    res.sendFile("public/html/catalog.html", { root: __dirname })
})

// example GET endpoint, which returns the current date
app.get("/current_date", (req, res) => {
    res.send(new Date())
})

app.listen(port)
