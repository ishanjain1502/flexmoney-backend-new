const Joi = require("joi");

const RegisterSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(18).max(65),
  email: Joi.string().pattern(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
  mobile: Joi.string()
    .length(10)
    .pattern(new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/)),
  password: Joi.string().pattern(new RegExp("[0-9a-zA-Z]{6,}")),
  confirmPassword: Joi.ref("password"),
});

const LoginSchema = Joi.object({
  email: Joi.string().pattern(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
  password: Joi.string().pattern(new RegExp("[0-9a-zA-Z]{6,}")),
});

// const ValidatingRegister = async(req,res, next) => {
//     try{
//         const val = RegisterSchema.validate(req.body);
//         next();
//     }catch(e){
//         console.log(e);
//         console.log("<<<" + " call from reg validator");
//     }
// }

// const LoginRegister = async(req,res, next) => {
//     try{
//         const val = LoginSchema.validate(req.body);
//         next();
//     }catch(e){
//         console.log(e);
//         console.log("<<<" + " call from login validator");
//     }
// }

exports.RegisterSchema = RegisterSchema;
exports.LoginSchema = LoginSchema;
