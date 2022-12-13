const { AddUserInDataBase, 
    FindUserWithEmailAndPassWord,
    UserDataUpdate
} = require("../../../db/Users/index")

const { isValid,isValid1 } = require('./user');

const SignUp = async(req,res) => {
    try{
        const user = req.body;
        console.log(user)
        if (!isValid(user)) return res.status(404).send('data filled not appropriate');
        const data = await AddUserInDataBase(user);
        return res.status(200).send({ info: 'User Add', data });
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}

const SignIn = async (req, res) => {

    try {
        const user = req.body;
        console.log(user)
        if (!isValid1(user)) return res.status(404).send('data filled not appropriate');
        const data = await FindUserWithEmailAndPassWord(user);
        return res.status(200).send({ info: 'User Add', data });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}   

const UsersUpdate =async (req,res) => {

    try {

        console.log('call')

        const data = await UserDataUpdate(req.userId,req.body);
        return res.status(200).send({ info: 'Users Updated', data });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}

exports.SignIn = SignIn;
exports.SignUp = SignUp;
exports.UsersUpdate = UsersUpdate