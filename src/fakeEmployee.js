var fakeData = [{
    Department: "Dotnet",
    Id: 1,
    Name: "Maulik"
},
{
    Department: "Dotnet",
    Id: 2,
    Name: "Nik"
},
{
    Department: "full-stack",
    Id: 3,
    Name: "Jon"
},
{
    Department: "Java",
    Id: 4,
    Name: "Jani"
}];
exports.getEmployee = function () {
    return fakeData;
}

exports.addNewNewEmployee = function (emp) {
    let data = fakeData.find(x => x.Id === emp.Id);
    if (data) {
        data = emp;
    } else {
        fakeData.push(emp);
    }
}

exports.deleteEmployee = function (id) {
    console.info(`selected id :${id}`)
    let index = fakeData.findIndex(x => x.Id === parseInt(id));
    if (index >= 0) {
        fakeData.splice(index, 1);
    }
    console.info(index);
    console.info(JSON.stringify(fakeData))
}
