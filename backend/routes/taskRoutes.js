const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  createTask,
  getTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

router.use(authMiddleware);

router.post("/", createTask);
router.get("/", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
