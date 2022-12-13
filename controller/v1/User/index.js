const { AddUserInDataBase, 
    FindUserWithEmailAndPassWord,
    UserDataUpdate
} = require("../../../db/Users/index")

const { isValid,isValid1 } = require('./user');
const {RegisterSchema, LoginSchema} = require("../../../middleware/v1/validations");

const SignUp = async(req,res) => {
    try{
        const user = req.body;
        console.log(user)
        const val = RegisterSchema.validate(user)
        if(val.error){
            return res.status(404).json({ message: 'data filled not appropriate', status : 404});
        }
        const data = await AddUserInDataBase(user);

        if(data.flag === 1){
            return res.status(301).json({ info: 'Duplicate email or number' , status: 301});
        }

        return res.status(200).json({ info: 'User Added', data , status: 200});
    }catch(e){
        console.log(e);
        res.status(500).json({e});
    }
}

const SignIn = async (req, res) => {

    try {
        const user = req.body;
        console.log(user)
        const val = LoginSchema.validate(user);
        if(val.error){
            return res.status(404).json({ message: 'data filled not appropriate', status : 404});
        }

        const data = await FindUserWithEmailAndPassWord(user);
        return res.status(200).json({ info: 'User Logged in', data , status : 200});
    } catch (e) {
        console.log(e);
        res.status(500).json({e, status : 500});
    }
}   

const UsersUpdate =async (req,res) => {

    try {
        
        console.log('call')

        const data = await UserDataUpdate(req.userId,req.body);
        return res.status(200).json({ info: 'Users Updated', data , status : 200});
    } catch (e) {
        console.log(e);
        res.status(500).json({e , status : 500});
    }
}

exports.SignIn = SignIn;
exports.SignUp = SignUp;
exports.UsersUpdate = UsersUpdate