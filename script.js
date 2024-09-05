// Given array
let employees = [
  { id: 1, name: 'john', age: '18', profession: 'developer' },
  { id: 2, name: 'jack', age: '20', profession: 'developer' },
  { id: 3, name: 'karen', age: '19', profession: 'admin' },
];

// Function to print developers using map
function PrintDeveloperbyMap() {
  employees.map((employee) => {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });
}

// Function to print developers using forEach
function PrintDeveloperbyForEach() {
  employees.forEach((employee) => {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });
}

// Function to add a new employee
function addData() {
  let newEmployee = { id: 4, name: 'susan', age: '20', profession: 'intern' };
  employees.push(newEmployee);
  console.log(employees);
}

// Function to remove admin
function removeAdmin() {
  employees = employees.filter((employee) => employee.profession !== 'admin');
  console.log(employees);
}

// Function to concatenate arrays
function ConcatinateArray() {
  let newEmployees = [
    { id: 5, name: 'alice', age: '22', profession: 'developer' },
    { id: 6, name: 'bob', age: '23', profession: 'designer' },
    { id: 7, name: 'charlie', age: '24', profession: 'manager' },
  ];
  let concatenatedArray = employees.concat(newEmployees);
  console.log(concatenatedArray);
}
