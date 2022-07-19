class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada() {
    return (this._tipoEntrada = this.tipoEntrada);
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  toString() {
    return `Tipo entrada = ${this._tipoEntrada}, marca = ${this._marca}`;
  }
}

// let dispositivoEntrada1 = new DispositivoEntrada("usb", "hp");
// console.log(dispositivoEntrada1.toString());

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  toString() {
    return ` id Raton => ${this._idRaton} ${super.toString()}`;
  }
}

let raton1 = new Raton("cable", "asus");
console.log(raton1.toString());
let raton2 = new Raton("cable", "asus");
console.log(raton2.toString());

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }
  toString() {
    return `id Teclado => ${this._idTeclado} ${super.toString()}`;
  }
}

let teclado1 = new Teclado("usb", "samsung");
let teclado2 = new Teclado("blueetoof", "hp");
console.log(teclado1.toString());

class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get idMonitor() {
    return this._idMonitor;
  }
  get marca() {
    return (this._marca = marca);
  }
  set marca(marca) {
    this._marca = marca;
  }
  get tamaño() {
    return this._tamaño;
  }
  set tamaño(tamaño) {
    this._tamaño = tamaño;
  }
  toString() {
    return `id Monitor = ${this._idMonitor}, marca monitor =${this._marca}, tamaño monitor = ${this._tamaño}`;
  }
}

let monitor1 = new Monitor("samsung", 15);
let monitor2 = new Monitor("hp", 24);
console.log(monitor1.toString());

class Computadora{
  static contadorComputadoras = 0;
  constructor(nombre,monitor,teclado,raton){
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre= nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
  toString(){
    return `id computadora=${this._idComputadora}
            nombre=${this._nombre}
            monitor=${this._monitor}
            teclado=${this._teclado}
            raton=${this._raton}
            `
  }
}

let computadora1 = new Computadora("hp",monitor1,teclado1,raton1);
let computadora2 = new Computadora("acer",monitor2,teclado2,raton2);
console.log(computadora1.toString());

class Orden{
  static contadorOrdenes = 0;

  constructor(){
      this._idOrden = ++Orden.contadorOrdenes;
      this._computadoras = [];
  }
  get idOrden(){
      return this._idOrden;
  }
  agregarComputadora(computadora){
      this._computadoras.push(computadora);
  }
  mostrarOrden(){
      let computadorasOrden = '';
      for( let computadora of this._computadoras ){
          computadorasOrden += `\n${computadora}`;
      }

      console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
  }
}

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();