const moment = require('moment')
// const tb_facilities = require('../../models/user.model.js')
const db = require("../../config/dbConnection.js");
const tb_facilities = db.tb_facilities;
const tbl_department = db.tbl_department;
const tbl_kpi = db.tbl_kpi;
const tbl_kpi_matrix = db.tbl_kpi_matrix;


//POST request to /fetchTimeSheet
exports.createKpi = (req, res) => {
  try {
    const {
      name, description, department_id, has_self_Review
    } = req.body

    tbl_kpi.create({
      name: name,
      description,
      department_id: department_id,
      has_self_Review: has_self_Review,
    })
      .then(r => {
        res.json({ status: true, result: r })
        console.log("dd444", r)
      })
  } catch (error) {
    console.log("error", error)
  }
};

exports.getAllKpi = async (req, res) => {
  try {
    console.log("dd444", await tbl_kpi.findAll())
    const r = await tbl_kpi.findAll()
    res.json({
      status: true,
      result: r
    })
  } catch (error) {
    console.log("error", error)
  }
};

exports.createDepartment = async (req, res) => {
  try {
    console.log("monee")
    const r = await tbl_department.create({
      name: req.body.name
    })
    res.json({
      status: true,
      result: r
    })
    console.log("dd444", r)
  } catch (error) {
    console.log("error in dept", error)
  }
};

exports.getAllDepartment = async (req, res) => {
  try {
    const r = await tbl_department.findAll()
    res.json({
      status: res.statusCode,
      result: r
    })
  } catch (error) {
    console.log("error", error)
    res.json({
      status: res.statusCode,
      error
    })
  }
};

exports.createKpiMetrics = async (req, res) => {
  try {
    const {
      tittle, tooltip, kpi_id, weightage
    } = req.body
    const r = await tbl_kpi_matrix.create({
      tittle, tooltip, weightage, kpi_id
    })
    res.json({
      status: true,
      result: r
    })
    console.log("dd444", r)
  } catch (error) {
    console.log("error in dept", error)
  }
};

exports.getAllKpiMetrics = async (req, res) => {
  try {
    const r = await tbl_kpi_matrix.findAll()
    res.json({
      status: true,
      result: r
    })
  } catch (error) {
    console.log("error in dept", error)

  }
}