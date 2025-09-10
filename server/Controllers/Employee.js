const Employees = require('../Model/Employee.js');
const { STORAGE_URL } = process.env;

const GetAllEmployees = async (req,res)=>{
    try{
        const AllEmployees = await Employees.findAll();
        return res.json(AllEmployees);
    }catch(error){
        res.status(404).json("Error:", error?.data?.message || 'Unknown error');
    }
}

const AddEmployee = async(req,res)=>{
    const empPic = req.file;
    
    try{
        await Employees.create({
            ...req.body,
            employeePic:`${STORAGE_URL}/${empPic.filename}`
        });
        res.json("Employee Created");
    }catch(error){
        console.log(error);
        res.status(404).json("Error:", error?.data?.message ?? 'Unknown error');
    }
}

const EditEmployee = async(req,res)=>{
    const Edits = req.body;
    const pfp = req.file || null;

    if(pfp) Edits.employeePic = `${STORAGE_URL}/${pfp.filename}`

    try{
        const Employee = await Employees.findByPk(Edits.id);
        if(Employee){
            Employee.update({
                ...Edits
            })
    
            return res.json(`Employee ${Employee.name} Updated`);
        }
        return res.status(404).json("Error: Employee not found");
    }catch(error){
        console.log(error);
        res.status(404).json("Error:", error?.data?.message);
    }
}

const DeleteEmployee = async(req,res)=>{
    const { id } = req.params;
    try{
        const Employee = await Employees.findByPk(id);
        if(Employee){
            await Employee.destroy();
            return res.json(`Employee ${Employee.name} Deleted`);
        }
        return res.status(401).json("Error:Employee not found");
    }catch(error){
        res.status(404).json("Error:", error?.data?.message);
    }
}

module.exports = { GetAllEmployees , AddEmployee , EditEmployee, DeleteEmployee }