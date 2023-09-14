const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

module.exports = {
  //get all data employee
  getEmployee(req, res) {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("SELECT * FROM employee;", (error, results) => {
        if (error) throw error;
        res.send({
          succes: true,
          message: "berhasil ambil data",
          data: results,
        });
      });
      connection.release();
    });
  },
  //get employee data
  getEmployeeById(req, res) {
    let id = req.params.id;

    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        `SELECT * FROM employee WHERE id = ? `,
        [id],
        (error, results) => {
          if (error) throw error;
          res.send({
            succes: true,
            message: "berhasil ambil data",
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  //add new employee data
  addEmployee(req, res) {
    const { name, age, address, position } = req.body;
    let data = {
      name,
      age,
      address,
      position,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            INSERT INTO employee SET ?;
            `,
        [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil tambah data!",
          });
        }
      );
      connection.release();
    });
  },
  // Update employee data
  editEmployee(req, res) {
    const { name, age, address, position } = req.body;
    let data = {
      name,
      age,
      address,
      position,
    };
    const id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            UPDATE employee SET ? WHERE id = ?;
            `,
        [data, id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil edit data!",
          });
        }
      );
      connection.release();
    });
  },
  // Delete Employee data
  deleteEmployee(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            DELETE FROM employee WHERE id = ?;
            `,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil hapus data!",
          });
        }
      );
      connection.release();
    });
  },
};
