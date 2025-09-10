const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DB');

const Employee = sequelize.define('Employees',{
    id:{
        type: DataTypes.UUID,
        allowNull:false,
        unique:true,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    designation:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    project:{
        type:DataTypes.STRING,
        allowNull:true
    },
    employeeType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    employeePic:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = Employee;