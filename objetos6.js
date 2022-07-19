
//construcctor

function Persona(nombre,apellido,email){
    this._nombre = nombre;
    this._apellido = apellido;
    this._email = email;
    this._nombreCompleto = function(){
        return this._nombre +" "+this._apellido
    }
}

let padre = new Persona("juan", "peres", "jperez@gmailc.om");
console.log(padre);

let madre = new Persona("mari", "marin", "mmarin@gmailc.om");
console.log(madre);

padre.tel = "2645563"
madre.tel = "2644463"

console.log(padre.tel);
console.log(madre.tel);