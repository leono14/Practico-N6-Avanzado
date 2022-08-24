function esNatural(num) {
    if (typeof num !== 'number')
        return true;
    return (num >= 0.0) && (Math.floor(num) === num) && num !== Infinity;
}
console.log(esNatural(95));



function Colores(colores, color, nuevoColor) {
    while(colores.indexOf(color) != -1){
        colores.splice(colores.indexOf(color), 1,
nuevoColor);
    }
}
var colores = ['Blanco', 'Negros', 'Rojo', 'Amarillo',
'Negros', 'Verde']
Colores(colores, 'Negros', 'Black');
console.log(colores)

var colores = ['Blanco', 'Negros', 'Rojo', 'Amarillo', 'Negros', 'Verde']



function Filtrado(colores) {
    const palabra = 'Black'
    const filtrar = colores.filter(b => {
        for(color of palabra){
            if(b.indexOf(color) === -1)
            return true;
        }
        return false;
    });
    return filtrar;
}
var colores = ['Blanco', 'Black', 'Rojo', 'Amarillo', 'Black', 'Verde']
Filtrado(colores)
console.log(Filtrado(colores))



function Filtrar(personas){
    let filtrado = personas.filter(personas => personas.edad < 18);
    return filtrado;
}
const personas = [
    { nombre: 'Carlos', edad: 20},
    { nombre: 'Esteban', edad: 15},
    { nombre: 'Franco', edad: 12},
    { nombre: 'Estela', edad: 19},
    { nombre: 'Juan', edad: 10},
    { nombre: 'Mirtha', edad: 17}
];





