class Student {
  static count = 0;
  constructor(name, year) {
    this.name = name;
    this.year = year;
    Student.count += 1;
  }

  calc() {
    let age = 2024 - this.year;
    console.log(age);
  }

  static display() {
    console.log("hello");
  }
}

let s1 = new Student("Alu", 2005);
console.log(s1);
s1.calc()
Student.display();

console.log(Student.count);

let s2 = new Student("Alu", 205);
console.log(s2);
s2.calc()
Student.display();

console.log(Student.count);