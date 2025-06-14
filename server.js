const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Hardcoded array of tasks
let tasks = [
  { id: 1, description: 'Buy groceries', completed: false },
  { id: 2, description: 'Do laundry', completed: true },
  { id: 3, description: 'Walk the dog', completed: false }
];

// GET /api/tasks — Return all tasks, with filtering
app.get('/api/tasks', (req, res) => {
  const { completed } = req.query;
  let filteredTasks = tasks;

  if (completed !== undefined) {
    const completedBool = completed === 'true';
    filteredTasks = tasks.filter(task => task.completed === completedBool);
  }

  res.json(filteredTasks);
});

// POST /api/tasks — Add a new task
app.post('/api/tasks', (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: 'Description cannot be empty' });
  }

  const newTask = {
    id: tasks.length + 1,
    description: description,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask); // Respond with the new task and a 201 Created status
});

// PUT /api/tasks/:id — Mark as completed
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.completed = true;
  res.json(task);
});

// DELETE /api/tasks/:id — Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.status(204).send(); // Respond with a 204 No Content status
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});