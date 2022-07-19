// inicio creacion de objeto 
let persona ={
    nombre:"juan",
    apellido:"lara",
    edad:24,
    // agregar metodo 
    nombreCompleto : function(){
        
        return this.nombre +" "+ this.apellido;
    },
    infoTotal : function(){
        return this.nombreCompleto() + " "+ this.edad
    }
}

// fin creacion de objeto 

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona);

console.log(persona.nombreCompleto());
console.log(persona.infoTotal());

// otra forma para crear objeto 

let persona2 = new Object();

persona2.nombre = "sebas"
persona2.apellido = "gonzales"
persona2.celular = "312592758"

console.log(persona2.nombre);


