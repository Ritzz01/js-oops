class Student {
  name;
  static count = 0;
  static main() {
    return Student.count + 1;
  }

  display() {
    console.log(`${this.name}`);
  }
}

let s1 = new Student();
s1.name = "Arya";
s1.display();
console.log(Student.main());

let s2 = new Student();
s2.name = "Aru";
s2.display();
console.log(Student.main());