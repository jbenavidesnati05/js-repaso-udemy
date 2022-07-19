
//FUNCIONES CALLBACK - SETTIMEOUT 
//Llamadas asincronas 

function miFuncioncallback1(){
  console.log("saludo despues de 5 segundos");
}

function miFuncioncallback(){
  console.log("saludo despues de 3 segundos");
}

setTimeout(miFuncioncallback1,5000);
setTimeout(miFuncioncallback,3000);
setTimeout(function(){console.log("saludo asincrono2")},6000);
setTimeout(()=>(console.log("saludo desde flecha asincrono")),7000);