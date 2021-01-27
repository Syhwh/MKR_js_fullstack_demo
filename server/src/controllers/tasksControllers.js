const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {

  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
    console.log(tasks)
  } catch (error) {
    console.log('Error getting tasks', error);
  }
};


const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description })
  try {
    await task.save();
    res.status(200).json({ response: true })
  } catch (error) {
    console.log('Erro creating task', error)
  }
}


const deleteTask = async (req, res) => {
  const { id } = req.params
  try {
    await Task.findByIdAndDelete(id)
    res.status(200).json({ response: true })

  } catch (error) {
    console.log('Error deleting task', error)
  }
}


module.exports = {
  getAllTasks,
  createTask,
  deleteTask
}
