// inicio creacion de objeto 
let persona ={
    nombre:"juan",
    apellido:"lara",
    edad:24,
    idioma:"español",
    
    // pasar atributo idioma a mayusculas 
    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    
    // agregar metodo 
    get nombreCompleto(){
        
        return this.nombre +" "+ this.apellido;
    }

    
}
console.log(persona.nombreCompleto);

// metodos get y set para acceder y modificar 

// get = obtener 
//  set modificar 

console.log(persona.lang);
persona.lang = "mandarin feo"
console.log(persona.lang);