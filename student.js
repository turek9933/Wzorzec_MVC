let FULLNAME = 'Tomasz Turek';
let STUDENT_ID = 44674;
let message = "My name is ${asdsa}. My student ID is ${STUDENT_ID}";

function getStudentFullName() {}
function getStudentId() {}

console.log("My name is " + FULLNAME + ". My student ID is " + STUDENT_ID + ".");


function getStudentFullName() {
    return FULLNAME;
}
function getStudentId() {
    return STUDENT_ID;
}

console.log("My name is " + getStudentFullName() + ". My student ID is " + getStudentId() + ".");

module.exports = {
    getStudentFullName,
    getStudentId,
};
    