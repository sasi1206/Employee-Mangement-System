const { body , check } = require('express-validator');

const name = body('name')
    .notEmpty().withMessage("Employee name can't be empty")
    .isString().withMessage("Employee name must be string");

const id = body('id')
    .notEmpty().withMessage("id can't be empty")
    .isString().withMessage("id must be string");

const department = body('department')
    .notEmpty().withMessage("Department can't be empty")
    .isString().withMessage("Department must be string");

const designation = body('designation')
    .notEmpty().withMessage("Designation can't be empty")
    .isString().withMessage("Designation must be string");

const employeeType = body('employeeType')
    .notEmpty().withMessage("Employee Type can't be empty")
    .isString().withMessage("Employee Type must be string");

const stauts = body('status')
    .notEmpty().withMessage("Status can't be empty")
    .isString().withMessage("Status must be string");

const image = check().custom((value,{ req })=>{
    const file = req.file;
    if(!file){
        throw new Error("Employee image can't be empty");
    }
    return true
})

module.exports = [ image,id,name,department,designation,employeeType,stauts ];