const { Router } = require('express');
const taskRouter = Router();

const { getAllTasks, createTask, deleteTask } = require('../controllers/tasksControllers');


taskRouter.get('/tasks', getAllTasks);
taskRouter.post('/tasks', createTask);
taskRouter.delete('/tasks/:id', deleteTask);
taskRouter.put('/tasks', () => console.log('edit tasks'))

module.exports = taskRouter;