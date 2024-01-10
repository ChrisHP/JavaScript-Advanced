function repeatHello(cbFunction) {
  const id = setInterval(cbFunction,1000);
  setTimeout(()=>clearInterval(id),5000);
}
//La funcion callback debe ser una arrow function 
//porque al hacer un callback no acepta parametros
repeatHello(() => console.log("Hello"));
