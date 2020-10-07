// Actividad 1
// Creacion de objectos (Literal, Constructo y Clases) , crear un objecto que contenga al menos 3 tipos de datos.
// Actividad 2
// Agrega valores a los objectos creados anteriormente
// Actividad 3
// Manupula los objectos y muestralos en una lista (utilizando looping 'For')
// Actividad 4
// Crea una lista de supermercado utilizando la creacion de objecto (por ejemplo: frutas: {item: 'Pera, stock: 250, price: 2.55, currency: 'S/'})
// Actividad 5
// Crear una factura utilizando la lista del supermercado (Total, SubTotal e IGV)

// 1:
class casa {
    constructor(distrito, precio, color){
        this.distrito = distrito;
        this.precio = precio;
        this.color = color;
    }
}

// 2:
let casaNueva = new casa('surco', 250000, 'verde'); 
console.log('2',casaNueva);

// 3

for (let key in casaNueva) {
	console.log(`${key}: ${casaNueva[key]}`);
}
console.log('object keys', Object.values(casaNueva));

// 4
const productos = {
    tipo: 'frutas',
    nombreTipo: 'manzana',
    cantidad: 4,
    precio: 2,
    total: function (){
        return (this.cantidad * this.precio)* 1.18;
    },
    SubTotal: function(){
        return (this.cantidad * this.precio);
    },
    IGV: function(){
        return (this.cantidad * this.precio)* 0.18;
    }
} 

// 5


console.log(productos.total());
console.log(productos.SubTotal());
console.log(productos.IGV());