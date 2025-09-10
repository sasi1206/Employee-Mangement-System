const { validationResult } = require('express-validator');

const validate = (rules) => async (req,res,next)=>{
    for (const rule of rules) {
        await rule.run(req)
    }

    const errors = validationResult(req);

    if(errors.isEmpty()){
        next()
    }else{
        res.status(400).json({ 
            success:false,
            errors:errors.array().map(err =>({
                field:err.path || 'unknown',
                message:err.msg
            }))
        });
    }
}

module.exports = validate;