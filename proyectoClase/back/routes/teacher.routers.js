var express = require('express');
var router = express.Router();

const teacherController = require("../controllers/teacher.controller");

/* Post home page. */
router.get('/list', async function (request, response) {
  const result = await teacherController.getList();
  response.status(200).json({
    data: result,
    status: true,
    message: "Todo esta OK",
  });
});

router.post("/create", async function (request, response) {
  console.log(request.body);
  const result = await teacherController.postCreate(request.body);

  response.status(200).json({
    status: true,
    info: result,
  });
});

router.post("/update", async function (request, response) {
  const result = await teacherController.postUpdate(request.body);
  response.status(200).json({
    status: true,
    info: result,
  });
});

router.post("/delete", async function (request, response) {
  console.log(request.body);
  const result = await teacherController.postDelete(request.body);
  response.status(200).json({
    status: true,
    info: result,
  });
});

module.exports = router;
