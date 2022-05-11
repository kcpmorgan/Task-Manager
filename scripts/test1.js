// Objedt constructor
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function runTest() {
  console.log("Tests");

  // creating objects

  // 1. Object literal
  let dog = { name: "Frisky", age: 3 };
  console.log(dog);

  let dog2 = { name: "Toby", age: 5, color: "pink" };
  console.log(dog2);

  // 2. Object constructor
  let dog3 = new Dog("Fluffy", 9);
  console.log(dog3);
  let dog4 = new Dog("Rufty", 7);
  console.log(dog4);

  // 3. Class
  let cat1 = new Cat("Grumpy", 2);
  console.log(cat1);
}

// why not window.onload???
runTest();
