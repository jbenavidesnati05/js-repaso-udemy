//funcion tradicional
function miFuncion() {
  console.log("saludos desde mi funcion");
}
miFuncion();
// pasando a flecha
let miFuncionFlecha = () => console.log("saludos desde mi funcion flecha");
miFuncionFlecha();

const saludar = ()=> "saludos desde mi fucion flecha saludar "
console.log(saludar());

const funcionParemetros = (mensaje)=>{
  console.log(mensaje);
}

funcionParemetros(" enviando parametros");