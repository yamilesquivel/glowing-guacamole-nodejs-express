/*
*https://github.com/yamilesquivel
*Test realizados en la libreria Jest debido a que tuve problemas con jasmine
*
*/
var Bicicleta = require("../../models/bicicleta.js");
var request = require("request");
var server = require("../../bin/www");

describe('Bicicleta API', () => {
	describe('GET BICICLETAS /',()=> {
		it("Status 200 ", ()=> {
		
		var a=new Bicicleta(1, 'rojo', 'urbana', [-34.6012424,-58.3861467]);
		Bicicleta.add(a);
		
		request.get('https://localhost:3000/api/bicicletas', function (error,response,body){
		
		expect(response.statusCode).toBe(200);
			});		  
		});
	});
});

describe('POST BICICLETA /create',() => {
	it('STATUS 200 ',(done => {
		var headers={'content-type' : 'application/json'};
		var uBici='{ "id":10 , "color":"rojo", "modelo":"urbana","lat":-34 , "lng":-54 }';

		request.post({
			headers: headers ,
			url: 'https://localhost:3000/api/bicicletas',
			body: uBici
			}, function(error,response,body){
			expect(response.statusCode).toBe(200);
			expect(response.findById(10).color).toBe("rojo");
			done();

		});
	});
});