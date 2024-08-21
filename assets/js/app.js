const addEmployeesBtn = document.querySelector('#add-employees-btn');


const collectEmployees = () => {
  const employees = [];
  let keepGoing = true;

 
  while (keepGoing) {
    const firstName = prompt("Enter first name:").trim();
    const lastName = prompt("Enter last name:").trim();
    let salary = prompt("Enter salary:");

    
    salary = parseFloat(salary);
    if (isNaN(salary) || salary < 0) {
      salary = 0;
      alert("Invalid salary input. Setting salary to $0.");
    }

    
    const employee = { firstName, lastName, salary };
    employees.push(employee);

    keepGoing = confirm("Do you want to add another employee?");
  }

  return employees;
};


const displayAverageSalary = (employeesArray) => {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`The average salary of ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
};

const getRandomEmployee = (employeesArray) => {
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};



const displayEmployees = (employeesArray) => {
  const employeeTable = document.querySelector('#employee-table');


  employeeTable.innerHTML = '';

  
  employeesArray.forEach((employee) => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = employee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    newTableRow.append(salaryCell);

  
    employeeTable.append(newTableRow);
  });

 
  console.log('Table updated:', employeeTable.innerHTML);
};

const trackEmployeeData = () => {
  const employees = collectEmployees();

  console.table(employees);
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);

  employees.sort((a, b) => a.lastName.localeCompare(b.lastName, undefined, { sensitivity: 'base' }));

  displayEmployees(employees);
};


addEmployeesBtn.addEventListener('click', trackEmployeeData);
