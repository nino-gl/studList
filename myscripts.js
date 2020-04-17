var studentList = [];
var tableBody = document.getElementById('tableBody');
var av_grade = document.getElementById('av_grade');




///////////////////////////
//სტუდენტების რაოდენობის დათვლა

function students_count() {
    document.getElementById("students_n").innerHTML = studentList.length;
}




///////////////////////////
//სტუდენტის დამატება

function addStudent() {

    var name = prompt("სტუდენტის სახელი და გვარი");
    studentList.push(name);

    if (name == '' || name == null || !isNaN(name)) {
        alert ("კიდევ სცადეთ და ჩაწერეთ სტუდენტის სახელი და გვარი");
    }

    else {
        tableBody.innerHTML += '<tr>' +
            '<td>'+ name +'</td>'+
            '<td onclick="addGrade(this)"></td>'+
            '<td onclick="addGrade(this)"></td>'+
            '<td onclick="addGrade(this)"></td>'+
            '<td onclick="addGrade(this)"></td>'+
            '</tr>';
    }

    students_count();
}




///////////////////////////
//სტუდენტების წაშლა

function deleteStudents() {
    if (confirm("წავშალოთ ყველა სტუდენტი?")) {
        tableBody.innerHTML = '';
        studentList = [];
    }
    students_count();
}




///////////////////////////
//ნიშნების ჩაწერა

function addGrade(el) {

    var grade = prompt('grade');

    // grade < 0 ? el.innerHTML = 0 : el.innerHTML = grade;        
    // grade > 5 ? el.innerHTML = 5 : el.innerHTML = grade;

    if (grade >= 0 && grade <= 5) {
        el.innerHTML = grade;   
    
    }

    else if (grade > 5) {
        el.innerHTML = 5;
    }

    else if (grade < 0) {
        el.innerHTML = 0;
    }

    else {
        alert("კიდევ სცადეთ და შეიყვანეთ ციფრი");
    }



    if (grade == 4 || grade == 5) {
        event.target.style.backgroundColor = 'green';
    }

    else if (grade == 0 || grade == 1) {
        event.target.style.backgroundColor = 'red'
    }

}
















///////////////////////////
//სტუდენტების რაოდენობის დათვლა

//     var students_count = 0;


//     for (var i=0; i < studentList.length; i++) {
//         // if ( name !== ') {   აქ ვცდილობდი დამეჭირა ის რომ prompt-ის შეუვსებლად დახურვის შემთხვევაში, სტუდენტების რაოდენობა არ გაზრდილიყო, მაგრამ ვერ (((
//             if (studentList.length !== null) {
//                 students_count++;
//             }


//         document.getElementById("students_n").innerHTML = students_count;
//     // }
// }

// }





///////////////////////////
//საშუალო ქულის დათვლა

    // function total_grades() {
    //     grades_sum.splice (grade);

    //     var total = 0;

    //     for (var i = 0; i < grades_sum.length; i++) {
    //         total += grades_sum[i];
    //     }
    
    //     var avg = total / grades_sum.length;
    
    //     av_point.innerHTML = total_grades;
    // }
// }














    



