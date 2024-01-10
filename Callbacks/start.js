function repeatHello(cbFunction){
setInterval(cbFunction, 1000);
}

repeatHello(()=>console.log("Hello"));