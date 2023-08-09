const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});

const tasks = [
  { id: 1, name: 'Tarea 1', description: 'Descripción de la tarea 1' },
  { id: 2, name: 'Tarea 2', description: 'Descripción de la tarea 2' }
];

app.get('/task', (req, res) => {
  res.json(tasks);
});

app.post('/task', (req, res) => {
  const newTask = { id: tasks.length + 1, name: 'Nueva Tarea', description: 'Descripción de la nueva tarea' };
  tasks.push(newTask);
  res.json(newTask);
});

app.get('/image/:username', (req, res) => {
  const { username } = req.params;
  if (username === 'gengar') {
    res.sendFile(__dirname + '/gengar.png');
  } else {
    res.send('Usuario no encontrado');
  }
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
