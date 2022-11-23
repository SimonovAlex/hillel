var str = 'asdf';
var nbr = 1123;
var b = true;
var n = null;
var und = undefined;
var obj = {};
var user = { name: 'Vasya', age: 15 };
var car = { number: 123, mark: 'Ford' };
console.log(user.name);
function greeter(cl, person) {
    if (cl === "AM") {
        return 'Hello, ' + person;
    }
    if (cl === "PM") {
        return "Hi, " + person;
    }
}
// let user = "Jane User";
console.log(greeter("AM", "Alex"));
