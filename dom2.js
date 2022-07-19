let parrafos = document.getElementsByTagName("p");
console.log(parrafos.length);

for(let i in parrafos){
    console.log(`parrafo ${i}==>${parrafos[i].innerHTML}`);
}