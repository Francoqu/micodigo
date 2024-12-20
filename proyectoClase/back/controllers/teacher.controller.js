const modelTeacher = require('../models/teacher.models');

const getList = async ()=>{
    const result = await modelTeacher.fildAll();
    return result;
} ;

module.exports = {
getList,
};