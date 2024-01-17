const isLogged = true;
function loggedIn(logged) {
  return new Promise((resolve) => {
    if (logged) resolve(Math.random());
    else throw new Error("No esta logueado");
  });
}
function greater(number) {
  if (number > 0.5) return { name: "John", age: 24 };
  else throw new Error("El numero es menor o igual");
}
loggedIn(isLogged)
  .then(greater)
  .then((userInfo) => console.log(userInfo))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("finally"));
