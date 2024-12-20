var express = require('express');
var router = express.Router();

const teacherController= require("../controllers/teacher.controller")



/* Post home page. */
router.get('/list', function (response) {
  const result = teacherController.getList();
  response.status(200).json({
    data: result,
    status: true,
    message: " Todo esta OK",
  });
});

module.exports = router;
 