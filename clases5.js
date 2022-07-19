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
  toString(){
    return this.nombreCompleto();
  }

  static saludar(){
    console.log("saludos desde met static");
  }
  static saludar2(persona){
    console.log(persona._nombre +" "+ persona._apellido);
  }
}



let persona1 = new Persona("diego","nati",);
// metodo static se puede llamar solo desde clase 
// persona1.saludar();
Persona.saludar()
Persona.saludar2(persona1)

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


// let persona1 = new Persona("diego","nati",);
// console.log(persona1._nombre);
// console.log(persona1._apellido);
// console.log(persona1);
// console.log(persona1.nombreCompleto());
// console.log(persona1.toString());


let empleado1 = new Empleado("jorge","nati", "tech")
Persona.saludar2(empleado1);
Persona.saludar(empleado1);

// console.log(empleado1._nombre);
// console.log(empleado1._apellido);
// console.log(empleado1._dep);
// console.log(empleado1);
// metodo heredado de la clase padre 
// console.log(empleado1.nombreCompleto());
// console.log(empleado1.toString());

