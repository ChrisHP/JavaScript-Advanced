const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

separateId(person);

function separateId({id,...personInfo}){
    console.log(id, personInfo);
}


