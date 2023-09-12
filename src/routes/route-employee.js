const router = require("express").Router();
const { employee } = require("../controllers");

router.get("/employee", employee.getEmployee);
router.get("/employee/:id", employee.getEmployeeById);
router.post("/employee/add", employee.addEmployee);
router.put("/employee/:id", employee.editEmployee);
router.delete("/employee/:id", employee.deleteEmployee);

module.exports = router;
