var express = require('express');
var router = express.Router();

const loginController = require("../controllers/login.controller")

/* GET home page. */
router.post('/login', function(request, response) {
    const result = loginController.getLogin(
        request.body.username,
        request.body.password
    );        


    response.status(200).json({
        status: true,
        message: !result ? "Okey esta el Login" : "Login correcto",
        info: result,
    })
});

module.exports = router;