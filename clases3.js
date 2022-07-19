class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  // agregar un metodo 
  nombreCompleto(){
    return this._nombre + " " + this._apellido;
  }
}


class Empleado extends Persona{
    constructor(nombre, apellido, dep){
        super(nombre,apellido)
        this._dep = dep;
    }

    get dep(){
        return this._dep;
    }

    set dep (dep){
        this._dep = dep 
    }
    // sobreescritura 
    nombreCompleto(){
      // forma 1 
    // return this._nombre + " " + this._apellido +" " +this._dep;
      // forma 2 
    return super.nombreCompleto()+" " +this._dep;

    }
}


let persona1 = new Persona("diego","nati",);
// console.log(persona1._nombre);
// console.log(persona1._apellido);
console.log(persona1);
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado("jorge","nati", "tech")
// console.log(empleado1._nombre);
// console.log(empleado1._apellido);
// console.log(empleado1._dep);
console.log(empleado1);
// metodo heredado de la clase padre 
console.log(empleado1.nombreCompleto());
