const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let employees = [
  { id: 1, name: 'Adnane Drief', age: 25, position: 'Developer' },
  { id: 2, name: 'Adnane1 Drief1', age: 30, position: 'Designer' },
  { id: 3, name: 'Adnane2 Drief2', age: 35, position: 'Manager' }
];

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.post('/employees', (req, res) => {
  console.log("req.body = ", req.body);
  const { name, age, position } = req.body;

  const id = employees.length + 1;
  const newEmployee = { id, name, age, position };

  employees.push(newEmployee);

  res.status(201).json(newEmployee);
});

app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const employee = employees.find((employee) => employee.id === id);

  if (!employee) {
    res.status(404).send('Employee not found');
  } else {
    res.json(employee);
  }
});

app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);

  employees = employees.filter((employee) => employee.id !== id);

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
