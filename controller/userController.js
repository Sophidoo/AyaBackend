import User from "../model/users/UserModel.js";
import bcrypt from "bcrypt";
import generateToken from "../util/generatetoken.js";
import {obtainTokenFromHeader} from "../util/obtaintokenfromheader.js";
// import obtainTokenFromHeader from "../util/obtaintokenfromheader.js";



export const userRegisterController = async(req, res) => {
    const {firstname, lastname, profilephoto, email, password} =req.body;
    try{
        const userFound = await User.findOne({email});
        if(userFound){
            return res.json({
                status: "error",
                data: "User Already exist"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const passwordhash = await bcrypt.hash(password, salt)
        const user = await User.create({
            firstname, 
            lastname, 
            email, 
            password: passwordhash
        })

        res.json({
            status: "success",
            data: user
        });
    }catch(error){
        res.json(error.message)
    }
}

// Login User
export const userLoginController = async(req, res) => {
    const {email, password} = req.body;
    // console.log(req.headers); 
    
    try{
        const foundUser = await User.findOne({email});
        
        if(!foundUser){
            return res.json({
                status: "error",
                message: "Wrong login details"
            })
        }
        
        const foundPassword = await bcrypt.compare(password, foundUser.password)
        if(!foundPassword){
            res.json({
                status: "error",
                message: "Wrong login details"
            })
        }else{
            res.json({
                status: "success",
                data: {
                    firstname: foundUser.firstname,
                    lastname: foundUser.lastname,
                    email: foundUser.email,
                    token: generateToken(foundUser._id)
                }
            });
        }
    }catch(error){
        res.json(error.message)
    }
}

//get speific user
export const getUserByIdController = async(req, res) => { 
    try{
        console.log(req.userAuth);
        const foundUser = await User.findById(req.userAuth);
        if(foundUser){
            res.json({
                status: "Success",
                data: {foundUser}
            });
        }else{
            res.json({
                status: "Success",
                message: "User with such id does not exist"
            });
        }
    }catch(error){
        res.json(error.message)
    }
}

export const getAllUserController = async(req, res) => {
    const allUsers = await User.find()
    try{
        res.json({
            status: "success",
            data: {allUsers}
        });
    }catch(error){
        res.json(error.message)
    }
}

export const userUpdateController = async(req, res) => {
    try{
        res.json({
            status: "success",
            data: "user details updated"
        });
    }catch(error){
        res.json(error.message)
    }
}

export const deleteUserController = async(req, res) => {
    try{
        res.json({
            status: "user deleted"
        });
    }catch(error){
        res.json(error.message)
    }
}