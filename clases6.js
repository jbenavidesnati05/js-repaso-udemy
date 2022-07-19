class Persona {

  static contadorObejtosPersona = 0;
  email = " este es el email";

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObejtosPersona++;
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
 
}

let persona1 = new Persona("vivi", "nati");
let persona2 = new Persona("andres", "benavides");
console.log(persona1);
console.log(persona1.email);

// console.log(Persona.contadorObejtosPersona);


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
  
}

let empleado1 = new Empleado("jorge","nati", "tech")
console.log(Empleado.contadorObejtosPersona);
console.log(empleado1.email);

