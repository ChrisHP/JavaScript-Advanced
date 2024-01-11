const number = 9;
const prom= new Promise((resolve,reject)=>{
    if(number>10)
        resolve(number)
    else
        reject("El numero es inferior")

});
prom.then((val)=>console.log(val)).catch((err)=>console.error(err));