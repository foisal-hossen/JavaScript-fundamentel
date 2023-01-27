//Object literal format
let object = {
  name: 'rahman',
  age:42
}
console.log(object);
//? ans:{ name: 'rahman', age: 42 }


//Constructor format
function Constructor(name,age) {
  this.name = name ;
  this.age = age;
}
var user1 = new Constructor('rahman', 25);
var user2 = new Constructor('sabbir', 27);
console.log(user1);
//? ans: { name: 'rahman', age: 45 }