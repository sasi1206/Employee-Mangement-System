const router = require('express').Router();
const { GetAllEmployees, AddEmployee , EditEmployee, DeleteEmployee } = require('../Controllers/Employee');
const fileSaver = require('../Middleware/Multer');
const validate = require('../Middleware/Validator');
const EmpValidator = require('../Validators/Employee');

router.route('/')
    .get(GetAllEmployees)
    .post(fileSaver.single('employeePic'),validate(EmpValidator),AddEmployee)
    .patch(fileSaver.single('employeePic'),validate(EmpValidator),EditEmployee)

router.delete("/:id",DeleteEmployee)

module.exports = router;
