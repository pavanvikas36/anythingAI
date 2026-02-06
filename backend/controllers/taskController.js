// const Task = require("../models/Task")

// exports.createTask = async (req, res) => {
//     console.log(req.header)
//     const task = await Task.create({
//         ...req.body,
//         createdBy: req.user.id
//     })
//     res.status(201).json(task)
// }

// exports.getTask = async (req, res) => {
//     const tasks = await Task.find({ createdBy: req.user.id })
//     res.json(tasks)
// }

// exports.updateTask = async (req, res) => {
//     const task = await Task.findById(req.params.id)

//     if (!task) return res.status(404).json({ message: "Task not found" })
    
//     if (task.createdBy.toString() !== req.user.id)
//         return res.status(403).json({ message: "Not Allowed" })

//     Object.assign(task, req.body)
//     await task.save()

//     res.json(task)
// }

// exports.deleteTask = async (req, res) => {
//     const task = await Task.findById(req.params.id)

//     if (!task) return res.status(404).json({ message: "Task not found"})
    
//     if (res.user.role !== "admin" && task.createdBy.toString() !== req.user.id)
//         return res.status(403).json({ message: "Not allowed" })

//     await task.deleteOne()
//     res.json({ message: "Task deleted" })
// }



const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.status(201).json(task);
};

exports.getTask = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.id });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.createdBy.toString() !== req.user.id)
    return res.status(403).json({ message: "Not allowed" });

  Object.assign(task, req.body);
  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (req.user.role !== "admin" && task.createdBy.toString() !== req.user.id)
    return res.status(403).json({ message: "Not allowed" });

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};
