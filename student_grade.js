function gradingStudents(grades) {
    function getGrade(grade) {
    const a = (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
    return a;
    }
    return grades.map(getGrade);
}
console.log(gradingStudents([73,67,38,33]));