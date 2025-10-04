class Person {
  constructor(
    public name: string,
    public age: number,
    public weight: number
  ) {}
}

const luiz = new Person('Luiz Paulo', 38, 90);
console.log(
  `Your name is ${luiz.name}, you are ${luiz.age} years old and you weight ${luiz.weight}kg`
);
