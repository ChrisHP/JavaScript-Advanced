const user = {
    id: 1,
    name: "John",
    age: 25,
  };
function saveUser(user){
    document.cookie=`user=${JSON.stringify(user)}`;
}
saveUser(user);
console.log(document.cookie);