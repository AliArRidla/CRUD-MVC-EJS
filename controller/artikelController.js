const { get } = require('../models/Artikel');
const Artikel = require('../models/Artikel')

module.exports = {
    index: function(req,res){
        Artikel:get(req.koneksi,function(err,rows){
       res.render('layouts/index',{data:rows});
        })
    },
    create: function(req,res){
        res.render('layouts/tambah');
    },
    store: function(req,res){
        Artikel.create(req.koneksi,req.body,function(err){
             res.redirect('/artikel');
        })
    }

}