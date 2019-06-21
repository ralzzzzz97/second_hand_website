var ilan_schema = require('../models/ilan');
var express = require('express');
var router = express.Router();



router.post('/insert', (request, response) => {

    var new_ilan = new ilan_schema(request.body);
    console.log(request.body)
    console.log(request.headers)
    
    new_ilan.save(err => {
        if (err) {
            console.log('İlan Eklerken Bir Hata Oluştur')
            return response.sendStatus(500).send({ message: err })

        }
        console.log("İlan Ekleme Başarılı")
        response.sendStatus(201)
    })
})
router.get('/select', async (req, res) => {
    var query = await ilan_schema.find({});
    res.send(query);
})
router.get('/select/otomobil',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"otomobil"})
    res.send(query);
})
router.get('/select/telefon',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"telefon"})
    res.send(query);
})
router.get('/select/ev',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"ev"})
    res.send(query);
})
router.get('/select/diger',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"diger"})
    res.send(query);
})

var ilan = {router};

module.exports = ilan