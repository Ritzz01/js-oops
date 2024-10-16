function Student(sname, sage) {
  this.sname = sname;
  this.sage = sage;
}
  
let s1 = new Student("alu", 10);
console.log(s1);

let s2 = new Student("aluoo", 10);
console.log(s2);


console.log(s1 instanceof Student);

console.log(Student instanceof Object);

