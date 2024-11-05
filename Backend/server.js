const { createConnection } = require("mysql");

const express = required("express");
const cors = required("cors");
const sql = required("myssql/msnodesqlv8");
var config ={
    server:"Omar\SQLSERVER",
    database:"e_commerce website",
    driver:"msnodesqlv8",
    options :{
        trustedConnection:true
    }
}
sql.connect(config,function(err) {
    if(err)console.log(err);
    var request =new sql.Request();
    request.query("select* from tbl_student")
})


