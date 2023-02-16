const credentialsDetails = process.env;
const objData = JSON.parse(process.env.OBJECT);
console.log(objData);
const arrayData = JSON.parse(process.env.ARRAY);
console.log(JSON.parse(process.env.ARRAY));
console.log(process.env.ARRAY);

const confi = {
  user: credentialsDetails.USER, // sql username
  password: credentialsDetails.PASSWORD, //sql user password
  server: "192.168.0.5", //SPDEV2019  if it does not work try- localhost - query to get server (SELECT @@SERVERNAME)
  database: "React",
  dialect: "mssql",
  options: {
    trustedconnection: true,
    encrypt: false, //true if it is sql azure then we need to do this
    enableArithAbort: true,
    trustServerCertificate: true,
    instancename: "", // SQL Server instance name - query to get server (SELECT SERVERPROPERTY ('InstanceName'))
  },
  port: 1433,
};

module.exports = confi;
