const express = require('express');
const app = express()
var methodOverride = require("method-override")
const koneksi = require("./config/db.js")

//menghubungkan dengan templating engine
app.set('view engine', 'ejs');

// koneksi ke database
app.use(function(req,res,next){
req.koneksi = koneksi
next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride("_method"))

// menghubungkan dengan routing
const artikelRouter = require("./router/artikelRouter")
app.use('/artikel',artikelRouter);

app.listen(5000, () => {
    console.log(`Server terhubung`);
});