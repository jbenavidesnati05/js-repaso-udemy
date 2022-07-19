
async function funcionPromesaAwait(){
  let miPromesa= new Promise(resolver => {
    resolver("promesa con await");
  });
  console.log(await miPromesa);
}
funcionPromesaAwait();
