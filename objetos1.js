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
        return this.nombreCompleto() + " tiene  "+ this.edad + " años "
    }
}
console.log(persona.infoTotal());

// recorreindo objeto como arreglo 
console.log(persona["infoTotal()"]);

// recorreindo objeto con ciclo for in 

for(propiedad in persona){
    console.log(persona[propiedad]);
}
