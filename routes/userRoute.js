import express  from "express";
import { deleteUserController, userLoginController, userRegisterController, userUpdateController,  getUserByIdController, getAllUserController} from "../controller/userController.js";
import { isLogin } from "../middleware/isLogin.js";

const userRoute = express.Router();


// Register User
userRoute.post("/register", userRegisterController)

// Login user
userRoute.post("/login", userLoginController)

// get user profile
userRoute.get("/profile/", isLogin, getUserByIdController)  

// get all user 
userRoute.get("", getAllUserController)

// delete user
userRoute.delete("/:id", deleteUserController)

// update user
userRoute.put("/:id", userUpdateController)

export default userRoute;