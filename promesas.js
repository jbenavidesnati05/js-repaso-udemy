let miPromesa = new Promise((resolver,rechazar)=>{
  let expresion = false;
  if (expresion) {
    resolver("resolvio correctamente")
  }else{
    rechazar("ocurrio un error")
  }
});
// metodo then 
// miPromesa.then(valor=>{console.log(valor)},error=>{console.log(error);})

// metodo catch 

miPromesa
.then(valor=>console.log(valor))
.catch(error=>console.log(error));

