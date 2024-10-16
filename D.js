//prototype

function Student(sname, year) {
  this.sname = sname;
  this.year = year;

  Student.prototype.age = function () {
    let currentYr = new Date().getFullYear();
    let agee = currentYr - this.year;
    console.log(agee);
  };
}
let s1 = new Student("arya", 2005);
console.log(s1);
s1.age()


console.log(s1.__proto__);

console.log(Student.prototype==s1.__proto__);

console.log(s1.__proto__.__proto__);

console.log(s1.__proto__.__proto__.__proto__);