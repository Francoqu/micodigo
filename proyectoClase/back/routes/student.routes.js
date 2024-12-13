var express = require('express');
var router = express.Router();

/* Post home page. */
router.post('/create', function(request, response) {
  response.status(200).json({
    status: true,
    message: " Todo esta OK",
  });
});

module.exports = router;
