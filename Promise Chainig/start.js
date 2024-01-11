const isLogged = true;
function loggedIn(logged) {
  return new Promise((resolve, reject) => {
    if (logged) resolve(Math.random());
    else reject("No esta logueado");
  });
}
function greater(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) resolve({ name: "John", age: 24 });
    else reject("El numero es menor o igual");
  });
}

loggedIn(isLogged)
  .then((number) => greater(number))
  .then((userInfo) => console.log(userInfo))
  .catch((err) => console.log(err));
