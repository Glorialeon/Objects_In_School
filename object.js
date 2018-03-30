var id = 1;

function Student(firstName, lastName, grade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.id = id++;

}

function Teacher(firstName, lastName, subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id++;
}

function Section(name, count){
    this.name = name;
    this.count = count;
    this.students = [];
    this.teachers = [];
    this.id = id++;
}
