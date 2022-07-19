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

//agregando propiedad
persona.tel = "2645563"
// llamando nueva propiedad 
console.log(persona.tel);

console.log(persona);


delete persona.tel
console.log(persona.tel);


console.log(persona);



