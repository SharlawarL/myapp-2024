
const am = require('../models/authModel');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
    empLogin :  (req, res)=>{
        const params = {
            email : req.body.email,
            password : req.body.password,
        }

        am.empLogin(params, async (err, result) =>{
            if(err)
            {
                return res.status(500).send(err)
            }
            
            //Var init
            let data = {};
            let empData = result.length > 0 ? result[0] : {};

            // Check password
            let passCheck = await bcrypt.compare(params.password, empData.password);

            // Token generation
            var token = jwt.sign({ email: empData.email }, "lalitsharlawar2024", { expiresIn: '1h' });
            console.log("token ===>>", token)

            if(empData.password && passCheck)
            {
                data["status"] = 200;
                data["message"] = "Employee login successfully!";
                data["data"] = result;
                data["token"] = token;

                res.status(200).json(data);
            } else {
                data["status"] = 500;
                data["message"] = "Invalid email and password";
                data["data"] = [];

                res.status(500).json(data);
            }
        });
    },
    empRegister :  (req, res)=>{

        const params = {
            firstname : req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password
        }

        am.empRegister(params, (err, result) =>{
            if(err)
            {
                return res.status(500).send(err)
            }
            
            let data = {};

            if(result)
            {
                data["status"] = 200;
                data["message"] = "Employee Registered successfully";
                data["data"] = [];

                res.status(200).json(data);
            } else {
                data["status"] = 500;
                data["message"] = "Samething went wrong!";
                data["data"] = [];

                res.status(500).json(data);
            }
        });
    }
}