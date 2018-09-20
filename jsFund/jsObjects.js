let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function logStudents(list) {
    for (let student of list) {
            console.log(`Name: ${student.name}, Cohort: ${student.cohort}`);
    }
}

// --------------

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function logEmployees(obj) {
    for (let key in obj) {
        console.log(key.toUpperCase());
        for (var i = 0; i < obj[key].length; i++) {
            var empNumber = i + 1;
            var firstName = obj[key][i].first_name;
            var lastName = obj[key][i].last_name;
            var nameLength = firstName.length + lastName.length;
            console.log(`${empNumber} - ${firstName}, ${lastName} - ${nameLength}`);
        }
    }
 }
