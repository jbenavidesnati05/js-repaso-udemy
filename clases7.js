class Persona {

  static contadorPersonas = 0;

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._idPersona =++Persona.contadorPersonas;
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
  nombreCompleto(){
  return "| Codigo: "+this._idPersona + "| Nombre: " + this._nombre + "| Apellido: " + this._apellido;
  }
  toString(){
  return this.nombreCompleto();
  }
 
}
let persona1 = new Persona("luci", "navia");
let persona2 = new Persona("andres", "benavides");
let persona3 = new Persona("juan", "perez");
// PARA PERSONA 1 
console.log(persona1);
console.log(persona1._idPersona);
console.log(persona1.nombreCompleto());
// PARA PERSONA 2 
console.log(persona2);
console.log(persona2._idPersona);
console.log(persona2.nombreCompleto());
// PARA PERSONA 3 
console.log(persona3);
console.log(persona3._idPersona);
console.log(persona3.nombreCompleto());



