class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, email) {
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._email = email;
  }

  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return (this._apellido = this.apellido);
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get() {
    return this._email;
  }
  set(email) {
    this._email = email;
  }
  toString() {
    return `Id persona => ${this._idPersona}
            Nombre => ${this._nombre} 
            Apellido => ${this._apellido}
            Email => ${this._email}`;
  }
}

let persona1 = new Persona("ramon", "valdes", "R@gamil.com");
console.log(persona1.toString());

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, email, sueldo) {
    super(nombre, apellido, email);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return (this._sueldo = sueldo);
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }
  toString() {
    return `${super.toString()} 
            Id Empleado => ${this.idEmpleado}
            Sueldo => $${this._sueldo}
            `;
  }
}

let empleado1 = new Empleado("roberto", "gomez","G@gmail.com",500);
console.log(empleado1.toString());

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre,apellido,email,fechaRegistro){
        super(nombre,apellido,email)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }

    toString(){
        return `${super.toString()} 
                id Cliente => ${this._idCliente}
                fecha registro => ${this._fechaRegistro}
                `
    }
} 

let cliente1 = new Cliente("angelinez", "fernandez","A@gmail.com","18-07-2022")
console.log(cliente1.toString());