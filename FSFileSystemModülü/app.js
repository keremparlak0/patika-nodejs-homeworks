const fs = require('fs')

// Create File
// fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
//     if (err) throw err
//     console.log('The file has been saved.');
// })

// Read File
const readFile = () => {
    fs.readFile('employees.json', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}


// Append File
fs.appendFile('employees.json', ',\n{"name": "Employee 2 Name", "salary": 8000}', (err) => {
    if (err) throw err;
})

// Delete File
// fs.unlink('employees.json', (err) => {
//     if (err) throw err;
// })

readFile()