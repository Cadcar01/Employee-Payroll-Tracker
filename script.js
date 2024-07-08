// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = []

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employee = {
    firstName: prompt("Enter First Name"),
    lastName: prompt("Enter Last Name"),
    salary: parseInt(prompt("Enter Salary"))
  }
  if (isNaN(employee.salary)) {
    employee.salary = 0
  }
  employeesArray.push(employee)
  if (confirm('Add Another?') === true) {
    collectEmployees()
  }
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const salaryArray = []
  // TODO: Calculate and display the average salary
  for (let i = 0; i < employeesArray.length; i++) {
    const salary = employeesArray[i].salary
    salaryArray.push(salary)
  }
  console.log(salaryArray)
  const arraySum = salaryArray.reduce((a, b) => a + b, 0)
  const average = arraySum / employeesArray.length
  const newAvg = average.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })
  console.log(`the average salary between the ${employeesArray.length} employees listed is ${newAvg}`)

  return average
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  function getRandomInt(min, maxi) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(maxi);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
  }
  const max = employeesArray.length
  const rand = employeesArray[getRandomInt(0, max)]
  console.log(`${rand.firstName} ${rand.lastName} has won the random drawing`)

  return employeesArray[rand]
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
