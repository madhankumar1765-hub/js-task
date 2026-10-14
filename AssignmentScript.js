// console.log("AssignmentScript.js loaded successfully.");
// console.log(5+4);
// let a = 10;
// let score = 0;
// score = score + 5;
// console.log("The value of a is: " + a);
// console.log("The value of score is: " + score);



// const stustudents = [
//   {
//     name: "Maniiii", 
//     age: 25,
//     major: "Computer Science"
//   },
//   {
//     name: "muthuraj",
//     age: 20,
//     major: "Mathematics"
//   },
//   {
//     name:"Kaliraj",
//     age: 22,
//     major: "Engineering"
//   }
// ];  
// stustudents.filter(student => student.age > 21)
// .map(student => student.name)
// .join("| ");
// stustudents.push({ name: "moorthy", age: 21, major: "computer science" }, { name: "saravanan", age: 23, major: "Chemistry" });
// stustudents.pop();
// stustudents.shift();
// stustudents.unshift({ name: "perumal", age: 21, major: "Physics" });
// stustudents.unshift({ name: "karthik", age: 24, major: "Biology" });
// stustudents.splice(0, 3, { name: "karthik", age: 24, major: "Biology" });
//  console.log(stustudents.filter(student => student.age > 21).map(student => student.name)
//  .join("| "));


// const students = [{name: "Manivanan",age: 25, greet() {return(`Hello, my name is ${this.name} and I am ${this.age} years old.`);}}];
// console.log(students[0].greet());
// students.updatemajor = "Mathematics";
// console.log(students[0].major);
// students.deletemajor = "mathematics";
// console.log(students[0].major);
// students.addcity = "Chennai";
// console.log(students[0].city);



//task 1

async function loadUsers() {

try {

const res = await fetch ("https://jsonplaceholder.typicode.com/posts");

const post = await res.json();

console.log (post);

} catch (error) {

console.log("Could not load:", error);
}
}

loadUsers();



//task 2

 const price = [120,60,899];
const totalPrice = price.reduce((sum , price) => sum + price, 0);
console.log("Total Price:", totalPrice);    



//task 3

const students = [  
    { name: "Maniiii", age: 25, major: "Computer Science" },    
    { name: "muthuraj", age: 20, major: "Mathematics" },
    { name:"Kaliraj", age: 22, major: "Engineering" }
];  

const totalAge=students.find(student => student.age > 21).age;
console.log(totalAge);

//task 4

function makeGreeter(greeting) {
  return function (name) {
    return greeting + " " + name;
  };
}

console.log(makeGreeter("Hello")("kaliraj"));







































