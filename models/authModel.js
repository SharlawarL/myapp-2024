
const db = require('../connection/dbConnection')
const bcrypt = require('bcrypt');

module.exports = {
    empLogin : (params, callback) =>{

        // data fetch from employee table
        const sql ="Select * from employees where email='"+params.email+"' ";

        db.query(sql, (err, result) =>{
            // Error
            if(err)
            {
                callback(err)
            }
            // Result

            callback(null, result);
        });
    },
    empRegister : async (params, callback) => {

        console.log("params ==>>", params)

        const encPass = await bcrypt.hash(params.password, 10);

        console.log("emc ==>>", encPass)

        const sql ="INSERT into employees (firstname, lastname, mobile, email, password, status) values('"+params.firstname+"', '"+params.lastname+"', '"+params.mobile+"', '"+params.email+"', '"+encPass+"', 'active')";

        db.query(sql, (err, result) =>{
            // Error
            if(err)
            {
                callback(err)
            }
            // Result
            callback(null, result);
        });
    },
}