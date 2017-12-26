function solve(arr) {
    function getUsers() {
        var users = [];
        var userObjs = arr.slice(1);
        userObjs.forEach(function(str, index) {
            users.push(JSON.parse(str));
        });

        return users;
    }

    var sortConditions = arr[0].split('^');
    var users = getUsers();
    var students = [];
    var trainers = [];
    users.forEach(function(student) {
        if (student.role == "student") {
            students.push(student);
        } else {
            trainers.push(student);
        }
    });

    if (sortConditions[0] == "name") {
        students = students.sort(function(s1, s2) {
            if (s1.firstname == s2.firstname) {
                return s1.lastname.localeCompare(s2.lastname);
            }
            return s1.firstname.localeCompare(s2.firstname);
        });
    } else {
        students = students.sort(function(s1, s2) {
            if (s1.level == s2.level) {
                return s1.id - s2.id;
            }
            return s1.level - s2.level;
        });
    }
    trainers.sort(function(t1, t2) {
        var t1Courses = t1.courses.length;
        var t2Courses = t2.courses.length;
        if (t1Courses == t2Courses) {
            return t1.lecturesPerDay - t2.lecturesPerDay;
        }
        return t1Courses - t2Courses;
    });

    var resultStudents = [];
    students.forEach(function (el) {
        var student = {
            id: el.id,
            firstname: el.firstname,
            lastname: el.lastname,
            averageGrade: avg(el.grades).toFixed(2),
            certificate: el.certificate
        };
        resultStudents.push(student);
    });
    var resultTrainers = [];
    trainers.forEach(function (el) {
        var trainer = {
            id: el.id,
            firstname: el.firstname,
            lastname: el.lastname,
            courses: el.courses,
            lecturesPerDay: el.lecturesPerDay
        };
        resultTrainers.push(trainer);
    });
    function avg(arr) {
        var sum = 0;
        arr.forEach(function (el) {
            sum += parseFloat(el);
        });

        return sum / arr.length;
    }


    var result = {"students": resultStudents, "trainers": resultTrainers};
    console.log(JSON.stringify(result));
}

function sulsUserModule(args) {

    function sortStudentByLevel(fS, sS) {
        if (fS.level < sS.level) {
            return -1;
        } else if (fS.level > sS.level) {
            return 1;
        }
        if (fS.id < sS.id) {
            return -1;
        } else if (fS.id > sS.id) {
            return 1;
        }
    }

    function sortStudentByName(fS, sS) {
        if (fS.firstname < sS.firstname) {
            return -1;
        } else if (fS.firstname > sS.firstname) {
            return 1;
        }
        if (fS.lastname < sS.lastname) {
            return -1;
        } else if (fS.lastname > sS.lastname) {
            return 1;
        }
    }

    function sortTrainerByCourses(fT, sT) {
        var fCourses = fT.courses.length,
            sCourses = sT.courses.length;
        if (fCourses == sCourses) {
            return fT.lecturesPerDay - sT.lecturesPerDay;
        }
        return fCourses - sCourses;
    }

    function dispatchSort(sortArgs, studentArr, trainerArr) {
        if (sortArgs[0] === 'level') {
            studentArr.sort(sortStudentByLevel);
        } else if (sortArgs[0] === 'name') {
            studentArr.sort(sortStudentByName);
        }
        if (sortArgs[1] === 'courses') {
            trainerArr.sort(sortTrainerByCourses);
        }
    }

    function printStudents(arr) {
        var output = [];
        arr.forEach(function (el) {
            var student = {
                id: el.id,
                firstname: el.firstname,
                lastname: el.lastname,
                averageGrade: avg(el.grades).toFixed(2),
                certificate: el.certificate
            };
            output.push(student);
        });

        return output;
    }

    function printTrainers(arr) {
        var output = [];
        arr.forEach(function (el) {
            var trainer = {
                id: el.id,
                firstname: el.firstname,
                lastname: el.lastname,
                courses: el.courses,
                lecturesPerDay: el.lecturesPerDay
            };
            output.push(trainer);
        });

        return output;
    }

    function avg(arr) {
        var sum = 0;
        arr.forEach(function (el) {
            sum += parseFloat(el);
        });

        return sum / arr.length;
    }

    var sortArguments = args[0].split('^'),
        trainers = [],
        students = [];

    for (var i = 1; i < args.length; i++) {
        var currentLine = args[i],
            objLine = JSON.parse(currentLine);

        if (objLine.role.trim() === 'student') {
            students.push(objLine);
        } else if (objLine.role.trim() === 'trainer') {
            trainers.push(objLine);
        }
    }
    dispatchSort(sortArguments, students, trainers);
    var trainerOutput = printTrainers(trainers);
    var studentOutput = printStudents(students);
    var result = {'students': studentOutput, 'trainers': trainerOutput};
    console.log(JSON.stringify(result));
}