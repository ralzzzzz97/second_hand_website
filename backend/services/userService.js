var user_schema = require('../models/user_schema');
var express = require('express');
var router = express.Router();



router.post('/insert', (request, response) => {

    var new_user = new user_schema(request.body);
    console.log(request.body)
    new_user.save(err => {
        if (err) {
            console.log('Kullanıcı Eklerken Bir Hata Oluştur')
            return response.sendStatus(500).send({ message: err })

        }
        console.log("Ekleme Başarılı")
        response.sendStatus(201)
    })
})
router.get('/select', async (req, res) => {
    var query = await user_schema.find({});
    res.send(query);
})

var user = {router};

module.exports = user