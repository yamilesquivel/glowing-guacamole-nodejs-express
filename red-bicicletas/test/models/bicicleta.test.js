/*
*https://github.com/yamilesquivel
*Test realizados en la libreria Jest debido a que tuve problemas con jasmine
*
*/

var Bicicleta = require("/home/yamil/pro_des_per/glowing-guacamole-nodejs-express/red-bicicletas/models/bicicleta.js");

beforeEach(()=>{ //inicializar el objeto vacio que se ejecuta cada ve antes de cada test
	Bicicleta.allBicis = [];
});

describe("Funcion Bicicleta.allBicis  ",() =>{
		it(" el total de elementos comienza con cero elementos", () =>{
				expect(Bicicleta.allBicis.length).toBe(0);
			});
		});

describe("Funcion Bicicleta.add ",() =>{
		it("agrega una bicicleta a la lista de bicicletas ", () =>{
			expect(Bicicleta.allBicis.length).toBe(0);
			var a=new Bicicleta(1, 'rojo', 'urbana', [-34.6012424,-58.3861467]);
			Bicicleta.add(a);
			expect(Bicicleta.allBicis.length).toBe(1);
			expect(Bicicleta.allBicis[0]).toBe(a);

			});
		});

describe(" Funcion Bicicleta.findById ",() =>{
		it(" encuentra la bici por el ID y devolver la bici con el ID", () =>{
			
			expect(Bicicleta.allBicis.length).toBe(0);
			var Bici1=new Bicicleta(1, 'rojo', 'urbana', [-34.6012424,-58.3861467]);
			var Bici2=new Bicicleta(2, 'verde', 'rural', [-34.6013424,-58.3862467]);
			
			Bicicleta.add(Bici1);
			Bicicleta.add(Bici2);
			var buscadorBici= Bicicleta.findById(1);
			
			expect(buscadorBici.id).toBe(1);
			expect(buscadorBici.color).toBe(Bici1.color);
			expect(buscadorBici.modelo).toBe(Bici1.modelo);
			});
		});
describe(" Funcion Bicicleta.removeById ",() =>{
		it(" borra la bicicleta por el ID", () =>{
			
			expect(Bicicleta.allBicis.length).toBe(0);
			var Bici1=new Bicicleta(1, 'rojo', 'urbana', [-34.6012424,-58.3861467]);
			var Bici2=new Bicicleta(2, 'verde', 'rural', [-34.6013424,-58.3862467]);
			
			Bicicleta.add(Bici1);
			Bicicleta.add(Bici2);

			var removedorBici= Bicicleta.removeById(1);
			
			expect(Bicicleta.allBicis[0]).toBe(Bici2);
			
			});
		});