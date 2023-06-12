
let employee = `[{
    "UniqueID": "001",
    "First Name": "Narek",
    "Last Name": "Shahverdyan",
    "Email address": "narek@gmail.com",
    "Job Title": "Media Professional",
    "Salary": "3000"
} , {
    "UniqueID": "002",
    "First Name": "Muhammed",
    "Last Name": "Arrifai",
    "Email address": "m.arrifai@gmail.com",
    "Job Title": "C++ Professional",
    "Salary": "4000"
} , {
    "UniqueID": "003",
    "First Name": "Fatmir",
    "Last Name": "Albani",
    "Email address": "fatmir@gmail.com",
    "Job Title": "Network Professional",
    "Salary": "3500"
} , {
    "UniqueID": "004",
    "First Name": "Steve",
    "Last Name": "Jobs",
    "Email address": "s.jobs@gmail.com",
    "Job Title": "Computer Professional",
    "Salary": "100000"
} , {
    "UniqueID": "005",
    "First Name": "Linus",
    "Last Name": "Torvalds",
    "Email address": "linus@gmail.com",
    "Job Title": "Linux Professional",
    "Salary": "1500"
} , {
    "UniqueID": "006",
    "First Name": "Bill",
    "Last Name": "Gates",
    "Email address": "b.gates@gmail.com",
    "Job Title": "Microsoft Professional",
    "Salary": "200000"
} , {
    "UniqueID": "007",
    "First Name": "Larry",
    "Last Name": "Page",
    "Email address": "larry@gmail.com",
    "Job Title": "Google Professional",
    "Salary": "150000"
} , {
    "UniqueID": "008",
    "First Name": "Robert",
    "Last Name": "DeNiro",
    "Email address": "r.deniro@gmail.com",
    "Job Title": "TV Actor",
    "Salary": "50000"
} , {
    "UniqueID": "009",
    "First Name": "Novak",
    "Last Name": "Dokovic",
    "Email address": "novak@gmail.com",
    "Job Title": "Profi Tennis Player",
    "Salary": "1000000"
} , {
    "UniqueID": "010",
    "First Name": "Elon",
    "Last Name": "Musk",
    "Email address": "e.musk@gmail.com",
    "Job Title": "Tesla founder",
    "Salary": "2000000000"
}
]`

/* <-- ------------------------------------------------------------------------ --> */

let employeeData = JSON.parse(employee);

// Print employee details as a table in the console
console.table(employeeData);


/* <-- ------------------------------------------------------------------------ --> */


/* let employeeData = JSON.parse(employee);

// Print each employee's details in the console
employeeData.forEach(function (employee) {
    console.log('-------------------------');
    console.log('UniqueID:', employee.UniqueID);
    console.log('First Name:', employee['First Name']);
    console.log('Last Name:', employee['Last Name']);
    console.log('Email address:', employee['Email address']);
    console.log('Job Title:', employee['Job Title']);
    console.log('Salary:', employee.Salary);
}); */

/* <-- ------------------------------------------------------------------------ --> */


/* let employeeData = JSON.parse(employee);

// Generate the HTML table markup
let tableHTML = '<table>';

// Create the table header row
tableHTML += '<tr>';
Object.keys(employeeData[0]).forEach(function (header) {
  tableHTML += '<th>' + header + '</th>';
});
tableHTML += '</tr>';

// Populate the table with employee data
employeeData.forEach(function (employee) {
  tableHTML += '<tr>';
  Object.values(employee).forEach(function (value) {
    tableHTML += '<td>' + value + '</td>';
  });
  tableHTML += '</tr>';
});

tableHTML += '</table>';

// Write the table markup to the document
document.write(tableHTML);
 */

/* <-- ------------------------------------------------------------------------ --> */

/* let employeeData = JSON.parse(employee);

// Generate the HTML table markup with border styling
let tableHTML = '<table style="border-collapse: collapse; width: 100%;">';

// Create the table header row
tableHTML += '<tr>';
Object.keys(employeeData[0]).forEach(function (header) {
    tableHTML += '<th style="border: 1px solid black; padding: 8px;">' + header + '</th>';
});
tableHTML += '</tr>';

// Populate the table with employee data
employeeData.forEach(function (employee) {
    tableHTML += '<tr>';
    Object.values(employee).forEach(function (value) {
        tableHTML += '<td style="border: 1px solid black; padding: 8px;">' + value + '</td>';
    });
    tableHTML += '</tr>';
});

tableHTML += '</table>';

// Write the table markup to the document
document.write(tableHTML);
 */