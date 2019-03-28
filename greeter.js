function greeter(person) {
    return "Hello, " + person;
}
function greeter2(person) {
    return "hello " + person.firstName + ", " + person.lastName;
}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var user = { firstName: 'a', lastName: 'a' };
console.log(greeter2(user));
