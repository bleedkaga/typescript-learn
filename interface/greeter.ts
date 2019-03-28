function greeter(person: string) {
  return "Hello, " + person;
}


// let user = "Jane User";

// document.body.innerHTML = greeter(user);
interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person){
  return `hello ${person.firstName}, ${person.lastName}`;
}

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let user = { firstName: 'a', lastName: 'a'}

console.log(greeter2(user))