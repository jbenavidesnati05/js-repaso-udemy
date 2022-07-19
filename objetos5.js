
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

padre._nombre= "antony"
padre._apellido = "benavides"
padre._email = "jbenavides@gmail.com"
console.log(padre);
console.log(` el nombre completo del padres es ${padre._nombre} ${padre._apellido} y su correo es ${padre._email}`);

console.log(padre._nombreCompleto());
console.log(madre._nombreCompleto());



