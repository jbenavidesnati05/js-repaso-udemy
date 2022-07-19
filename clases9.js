class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
      this._nombre = nombre;
      this._precio = precio;
      this._idProducto = ++Producto.contadorProductos;
    }
    get idProducto() {
      return this._idProducto;
    }
    get nombre() {
      return this._nombre;
    }
    set nombre(nombre) {
      this._nombre = nombre;
    }
    get precio() {
      return this._precio;
    }
    set precio(precio) {
      this._precio = precio;
    }
    toString() {
      return `Id Producto => ${this._idProducto} 
              Nombre Producto => ${this._nombre}
              Precio Producto => $${this._precio}        
      `;
    }
  }
  class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
      return 5;
    }
    constructor(){
      this._idorden = ++Orden.contadorOrdenes;
      this._productos= [];
      // this.contadorProductosAgregados =0;
    }
    get idOrden(){
      return this._idOrden;
    }
    agregarProducto(producto){
      if(this._productos.length< Orden.MAX_PRODUCTOS){
        this._productos.push(producto)
      }else{
        console.log("No se pueden agregar mas de 5 productos");
      }
    }
    calcularTotal(){
      let totalVenta = 0; 
      for(let producto of this._productos){
        totalVenta +=producto.precio;
      }
      return totalVenta;
    }
    mostrarOrden(){
      let productosOrden= " ";
      for(let producto of this._productos){
        productosOrden += `\n ${producto.toString()}`;
      }
      console.log(`orden =>${this._idorden} | Total =>${this.calcularTotal()} 
      Productos =>${productosOrden}`);
  
    }
  }
  
  let producto1 = new Producto("leche",1500)
  let producto2 = new Producto("jamon",2500)
  let producto3 = new Producto("carne",13000)
  let producto4 = new Producto("hueso",7000)
  
  let orden1= new Orden()
  orden1.agregarProducto(producto1);
  orden1.agregarProducto(producto2);
  console.log(orden1.mostrarOrden());
  
  let orden2= new Orden()
  orden2.agregarProducto(producto3);
  orden2.agregarProducto(producto4);
  console.log(orden2.mostrarOrden());
  