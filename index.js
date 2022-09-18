const employee = {
    name : "Sam",
    streetAddress : "street",
}
function updateEmployeeWithKeyAndValue(object, key, value) {
    console.log(object, key, value);
    const newEmployee = {...object};
    console.log(newEmployee);
    newEmployee[key] = value; 
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(object, key, value) {
    delete employee[key];
}



