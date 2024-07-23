
const db = require('../connection/dbConnection')

module.exports = {
    getAllCustomers : (callback) =>{

        // data fetch from customers table
        const sql ="Select * from customers";

        db.query(sql, (err, result) =>{
            // Error
            if(err)
            {
                callback(err)
            }
            // Result
            callback(null, result);
        });
    }
}