class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
}

let persona1 = new Persona("juan", "perez");
console.log(persona1._nombre);
console.log(persona1._apellido);
console.log(persona1);

let persona2 = new Persona ("carlos", "Lara")
console.log(persona2._nombre);
console.log(persona2._apellido);
console.log(persona2);
