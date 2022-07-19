//FUNCIONES  

function miFuncion1(){
  console.log("funcion 1");
}

function miFuncion2(){
  console.log("funcion 2");
}

miFuncion1();
miFuncion2();

//FUNCIONES CALLBACK 

function imprimir(mensaje){
  console.log(` el resultado es: ${mensaje}`);
}

function sumar(op1,op2,callback){
  let res = op1+op2;
  callback(res);
}

sumar(5,8,imprimir)
