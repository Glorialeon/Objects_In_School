function listStudents(){
    var html = "<table style=\"width:100%; font-size: 13px\">";
    for(var i=0; i< allStudents.length;i++){
        html += "<tr >";
        html += "<td>" + allStudents[i].firstName + "</td>";
        html += "<td>" + allStudents[i].lastName + "</td>";
        html += "<td>" + allStudents[i].grade + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("outPut").innerHTML=html;
}

console.log(listStudents);

function listTeachers(){
    var html = "<table style=\"width:100%; font-size: 13px\">";
    for(var i=0; i< allTeachers.length;i++){
        html += "<tr >";
        html += "<td>" + allTeachers[i].firstName + "</td>";
        html += "<td>" + allTeachers[i].lastName + "</td>";
        html += "<td>" + allTeachers[i].subject + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("outPut").innerHTML=html;
}

function listSections(){
    var html = "<table style=\"width:100%; font-size: 13px\">";
    for(var i=0; i< allSections.length;i++){
        html += "<tr >";
        html += "<td>" + allSections[i].name + "</td>";
        html += "<td>" + allSections[i].count + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("outPut").innerHTML=html;
}

// function clear(){
//     var input = document.getElementsByTagName("userText").innerHTML;
//     for(var i=0; i<input.length; i++){
//         if(input[i].type === "text"){
//             input[i].value = " ";
//         }
//     }
// }

function populateDropdowns() {
    var student = "<option value='0'>Select Student</option>";
    for (var i = 0; i < allStudents.length; i++) {
        student += "<option value= '" +
            allStudents[i].id + "'>" +
            allStudents[i].firstName + " " +
            allStudents[i].lastName + "</option>"
    }
    document.getElementById("studentList").innerHTML = student;

    //iterate through allStudents and add an option tag for each of them
    var teacher = "<option value='0'>Select Teacher</option>";
    for (var x = 0; x < allTeachers.length; x++) {
        teacher += "<option value= '" +
            allTeachers[x].id + "'>" +
            allTeachers[x].firstName + " " +
            allTeachers[x].lastName + "</option>"
    }
    document.getElementById("teacherList").innerHTML = teacher;

    var section = "<option value='0'>Select Section</option>";
    for (var y = 0; y < allSections.length; y++) {
        section += "<option value= '" +
            allSections[y].id + "'>" +
            allSections[y].name + "</option>"
    }
    document.getElementById("sectionList").innerHTML = section;

    var section1 = "<option value='0'>Select Section</option>";
    for (var z = 0; z < allSections.length; z++) {
        section1 += "<option value= '" +
            allSections[z].id + "'>" +
            allSections[z].name + "</option>0"
    }
    document.getElementById("sectionList1").innerHTML = section1;

    var section2 = "<option value='0'>Select Section</option>";
    for (var j = 0; j < allSections.length; j++) {
        section2 += "<option value= '" +
            allSections[j].id + "'>" +
            allSections[j].name + "</option>"
    }
    document.getElementById("sectionList2").innerHTML = section2;

    var section3 = "<option value='0'>Select Section</option>";
    for (var k = 0; k < allSections.length; k++) {
        section3 += "<option value= '" +
            allSections[k].id + "'>" +
            allSections[k].name + "</option>"
    }
    document.getElementById("sectionList3").innerHTML = section3;
}


function addStudent(){
    var studentFirst = document.getElementById("studentFirst").value;
    var studentLast = document.getElementById("studentLast").value;
    var studentGrade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(studentFirst, studentLast, studentGrade));
    document.getElementById("addStudents").innerHTML = studentFirst + " has been added";
    clear();
    populateDropdowns()
}

function addTeacher(){
    var teacherFirst = document.getElementById("teacherFirst").value;
    var teacherLast = document.getElementById("teacherLast").value;
    var teacherSubject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(teacherFirst, teacherLast, teacherSubject));
    document.getElementById("addTeachers").innerHTML = teacherFirst + " has been added";
    clear();
    populateDropdowns()
}

function addSection(){
    var sectionName = document.getElementById("sectionName").value;
    var sectionCount = document.getElementById("sectionCount").value;
    allSections.push(new Section(sectionName, sectionCount));
    document.getElementById("addSections").innerHTML = sectionName + " has been added";
    clear();
    populateDropdowns()
}

function getStudentById(student){
    for(var i=0;i<allStudents.length;i++){
        if(allStudents[i].id==student){
            return allStudents[i];
        }
    }
}

function getTeacherById(teacher){
    for(var i=0;i<allTeachers.length;i++){
        if(allTeachers[i].id==teacher){
            return allTeachers[i];
        }
    }
}

function getSectionById(section){
    for(var i=0;i<allSections.length;i++){
        if(allSections[i].id==section){
            return allSections[i];
        }
    }
}

function addStudentToSection() {
    var studentObject = getStudentById(document.getElementById("studentList").value);
    var sectionObject = getSectionById(document.getElementById("sectionList").value);
    sectionObject.students.push(studentObject);
    document.getElementById("addStudentsToSection").innerHTML = studentObject.firstName
        + " has been added to " + sectionObject.name;
}

function addTeacherToSection() {
    var teacherObject = getTeacherById(document.getElementById("teacherList").value);
    var sectionObject1 = getSectionById(document.getElementById("sectionList1").value);
    sectionObject1.teachers.push(teacherObject);
    document.getElementById("addTeachersToSection").innerHTML = teacherObject.firstName + " has been added to " + sectionObject1.name;
}

function listStudentsInSection() {
    var section = getSectionById(document.getElementById("sectionList2").value);
    var list = "<table style=\"width:100%; font-size: 13px\">";
    for(var i = 0; i < section.students.length; i ++){
        list += "<tr >";
        list += "<td>" + section.students[i].firstName + "</td>";
        list += "<td>" + section.students[i].lastName + "</td>";
        list += "<td>" + section.students[i].grade + "</td>";
        list += "</tr>";
    }
    list +="<table/>";
    document.getElementById("listStudents").innerHTML = list;
}

function listTeachersInSection() {
    var section1 = getSectionById(document.getElementById("sectionList3").value);
    var list = "<table style=\"width:100%; font-size: 13px\">";
    for(var i = 0; i < section1.teachers.length; i ++){
        list += "<tr >";
        list += "<td>" + section1.teachers[i].firstName + "</td>";
        list += "<td>" + section1.teachers[i].lastName + "</td>";
        list += "<td>" + section1.teachers[i].subject + "</td>";
        list += "</tr>";
    }
    list +="<table/>";
    document.getElementById("listTeachers").innerHTML = list;
}