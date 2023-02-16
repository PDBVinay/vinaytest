var config = require("./dbconfig");
const sql = require("mssql");

async function getCheckUser() {
  try {
    let pool = await sql.connect(config);

    let checkUser = await pool
      .request()
      .query("select * from [dbo].[EmployeeMaster]");
    console.log(checkUser.recordset);
    return checkUser.recordset;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}

module.exports = {
  getCheckUser: getCheckUser,
};
