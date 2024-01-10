function printAsyncName(cbFunction, name){
setTimeout(cbFunction,1000);
setTimeout(()=>console.log(name),2000)
}

printAsyncName(()=>console.log("Hello"),"Christian");