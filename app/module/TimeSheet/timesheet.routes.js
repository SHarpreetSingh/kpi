//Routes
const router = require("express").Router();
const Timesheet = require("./timesheet.controller");

// Retrieve all trades
// router.post("/", Timesheet.fetchTImeSheet);
router.post("/department", Timesheet.createDepartment);
router.get("/department", Timesheet.getAllDepartment);

router.post("/kpi", Timesheet.createKpi);
router.get("/kpi", Timesheet.getAllKpi);
router.post("/kpiMatrics", Timesheet.createKpiMetrics);
router.get("/kpiMatrics", Timesheet.getAllKpiMetrics);

module.exports = router;