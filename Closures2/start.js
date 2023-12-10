function printName(){
  let helloName="Hello John";
  console.log("now")
  function inner(){
    setTimeout(()=>console.log(helloName),1000);
  }
  inner();
}
printName();