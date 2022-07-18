var Employee = []
const prompt = require('prompt-sync')()

let toContinue = true;

while (toContinue) {
    console.log("1. Add")
    console.log("2. Delete")
    console.log("3. Search")
    console.log("4. Update")
    console.log("5. Exit")

    const result = parseInt(prompt('Which operation want to perform?'));

    switch (result) {
        case 1:
            const eid = parseInt(prompt('Enter id: '));
            const ename = prompt('Enter name: ');
            const esal = parseInt(prompt('Enter salary: '));
            Employee.push({
                id: eid,
                name: ename,
                salary: esal
            })
            console.log(Employee);
            console.log();
            break;

        case 2:
            const delete_id = parseInt(prompt('Enter employee id to delete employee: '));
            var index = Employee.findIndex((employee) => employee.id === delete_id);
            console.log(index)
            if (index === -1) {
                console.log("Employee not found")
                console.log();
            }
            else {
                Employee.splice(index, 1);
                console.log(Employee);
                console.log();
            }
            break;
        case 3:
            const empId = parseInt(prompt('Which employee id to search : '));
            var is_found = false;
            var location = null;
            // We can done it through findIndex() also
            for (let i = 0; i < Employee.length; i++) {
                if (Employee[i].id === empId) {
                    is_found = true;
                    location = i;
                    break;
                }
            }

            if (is_found) {
                console.log(`Employee with id ${empId} found.`)
                console.log(`Id: ${Employee[location].id} Name: ${Employee[location].name} Salary: ${Employee[location].salary}`)
                console.log();
            }
            else {
                console.log(`Employee with id ${empId} not found.`)
                console.log();
            }
            break;

        case 4:
            const employeeId = parseInt(prompt('Enter employee id to update information : '));
            var index = Employee.findIndex((num) => num.id === employeeId);
            if (index === -1) {
                console.log(`Employee with id ${employeeId} not found`)
                console.log();
            }
            else {
                var updated_name = prompt('Enter new name : ')
                var updated_salary = parseInt(prompt('Enter new salary : '))

                var newObj = {
                    id: employeeId,
                    name: updated_name,
                    salary: updated_salary
                };

                Employee.splice(index, 1, newObj);
                console.log(Employee);
                console.log();
            }
            break;


        case 5:
            toContinue = false;
            break;

        default:
            console.log("Wrong choice!!!");
    }
}