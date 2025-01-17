
const Auto = require('../models/autoModel');  


const createAuto = async (req, res) => {
  const { marca, modelo, año, color, precio } = req.body;
  try {
    const newAuto = await Auto.create({ marca, modelo, año, color, precio });
    res.status(201).json(newAuto);
  } catch (error) {
    console.error('Error al crear el auto:', error);
    res.status(500).send('Error al crear el auto');
  }
};

const getAutos = async (req, res) => {
  try {
    const autos = await Auto.findAll();
    res.status(200).json(autos);
  } catch (error) {
    console.error('Error al obtener los autos:', error);
    res.status(500).send('Error al obtener los autos');
  }
};


const getAutoById = async (req, res) => {
  const { id } = req.params;
  try {
    const auto = await Auto.findByPk(id);
    if (auto) {
      res.status(200).json(auto);
    } else {
      res.status(404).send('Auto no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener el auto:', error);
    res.status(500).send('Error al obtener el auto');
  }
};


const updateAuto = async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, año, color, precio } = req.body;
  try {
    const [updated] = await Auto.update({ marca, modelo, año, color, precio }, { where: { id } });
    if (updated) {
      const updatedAuto = await Auto.findByPk(id);
      res.status(200).json(updatedAuto);
    } else {
      res.status(404).send('Auto no encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar el auto:', error);
    res.status(500).send('Error al actualizar el auto');
  }
};

const deleteAuto = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Auto.destroy({ where: { id } });
    if (deleted) {
      res.status(200).send('Auto eliminado');
    } else {
      res.status(404).send('Auto no encontrado');
    }
  } catch (error) {
    console.error('Error al eliminar el auto:', error);
    res.status(500).send('Error al eliminar el auto');
  }
};


module.exports = { createAuto, getAutos, getAutoById, updateAuto, deleteAuto };
