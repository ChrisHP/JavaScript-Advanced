const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  // Modify the property `firstName` of the `person2` in "Simon".
  person2.firstName="Simon";
  //El atributo firstName del objeto person1 tambien cambia junto con el de person2 porque al simplemente
  //asignar a person2 person1 no hemos creado una copia del objeto si no de la instancia, haciendo asi que 
  //person1 y person2 no sean independientes por lo que person1 y person2 acceden a la misma direccion de memoria
  
  console.log(person1);
  console.log(person2);