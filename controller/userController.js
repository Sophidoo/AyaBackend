import User from "../model/users/UserModel.js";


export const userRegisterController = async(req, res) => {
    const {firstname, lastname, profilephoto, email, password} =req.body;
    try{
        const userFound = await User.findOne({email});
        if(userFound){
            return res.json({message: "User Already exist"})
        }
        const user = await User.create({
            firstname, 
            lastname, 
            email, 
            password
        })

        res.json({
            status: "success",
            data: user
        });
    }catch(error){
        res.json(error.message)
    }
}

export const userLoginController = async(req, res) => {
    try{
        res.json({
            status: "success",
            data: "Your details has successfully logged in"
        });
    }catch(error){
        res.json(error.message)
    }
}

export const getUserController = async(req, res) => {
    try{
        res.json({
            status: "success",
            data: "get user by id"
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