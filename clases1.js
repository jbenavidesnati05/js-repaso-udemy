class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;

    }
}

let persona1 = new Persona("juan", "perez");
console.log(persona1.nombre);
// metodo set 
persona1._nombre = "patricio";
// metodo get 
console.log(persona1.nombre);

console.log(persona1._nombre);
console.log(persona1._apellido);
console.log(persona1);

let persona2 = new Persona ("carlos", "Lara")
console.log(persona2._nombre);
console.log(persona2._apellido);
console.log(persona2);
