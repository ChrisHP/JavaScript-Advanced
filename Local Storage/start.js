const user = {
    id: 1,
    name: "John",
    age: 25,
  };
function saveUser(user){
    localStorage.setItem("user",JSON.stringify(user));
}
function recoverUser(){
    console.log(JSON.parse(localStorage.getItem("user")));
}
saveUser(user);
recoverUser();
