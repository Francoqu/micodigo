
const express = require('express');
const router = express.Router();


const {
  createAuto,
  getAutos,
  getAutoById,
  updateAuto,
  deleteAuto
} = require('../controllers/autoController');  


router.post('/', createAuto);  
router.get('/', getAutos);  
router.get('/:id', getAutoById);  
router.put('/:id', updateAuto);  
router.delete('/:id', deleteAuto);  

module.exports = router;
