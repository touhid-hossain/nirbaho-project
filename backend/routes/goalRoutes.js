const express = require("express");
const router = express.Router();
const {
  updateGoal,
  getGoal,
  postGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoal).post(protect, postGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
