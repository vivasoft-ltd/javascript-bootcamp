{
    /*
    let's say a company has three types of employees and the salary 
    for those three positions are predefined. We can create the 
    employee objects by using the factory pattern. Constructor pattern 
    has also been used in this example for creating certain objects.
    However, the employeeFactory() function has followed the 
    factory pattern to create employee objects.
    */
}

function employeeFactory(employeeType, employeeName) {
    let employee;
    if (employeeType === "fulltime") {
        employee = new fulltimeEmployee(employeeName);
    } else if(employeeType === "parttime") {
        employee = new parttimeEmployee(employeeName);
    } else if (employeeType === "temporary") {
        employee = new temporaryEmployee(employeeName);
    }
    employee.printEmployeeDetails = () => {
        console.log("Name: " + employee.name + "\n"
                    + "Salary: " + employee.salary + "\n"
                    + "Employee Type: " + employee.employeeType)
    }
    return employee;
}

function fulltimeEmployee(employeeName) {
    this.name = employeeName;
    this.salary = 50000;
    this.employeeType = "Fulltime Employee";
}

function parttimeEmployee(employeeName) {
    this.name = employeeName;
    this.salary = 30000;
    this.employeeType = "Parttime Employee";
}

function temporaryEmployee(employeeName) {
    this.name = employeeName;
    this.salary = 25000;
    this.employeeType = "Temporary Employee";
}

employee1 = employeeFactory("fulltime", "Fahim");
employee1.printEmployeeDetails();



// output:
//     Name: Fahim
//     Salary: 50000
//     Employee Type: Fulltime Employee






