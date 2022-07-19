
async function funcionPromesaAwaitSettimeout(){
  let miPromesa= new Promise(resolver => {
    setTimeout(() => resolver("promesa con await"),3000);});

    console.log(await funcionPromesaAwaitSettimeout);

}

funcionPromesaAwaitSettimeout();


