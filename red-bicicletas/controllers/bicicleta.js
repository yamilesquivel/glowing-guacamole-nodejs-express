var Bicicleta = require('../models/bicicleta.js');

exports.bicicleta_list = function(req,res){

res.render('bicicletas/index', {bicis: Bicicleta.allBicis});

}