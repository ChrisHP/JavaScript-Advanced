const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};
//Forma 1
//   const json = JSON.stringify(person,["id","age"]);

//Forma 2
const json = JSON.stringify(person, (a, b) => {
  if (a == "firstName" || a == "lastName") {
    return undefined;
  }
  return b;
});

console.log(json); // Should return: { "id": 1, "age": 25 }
