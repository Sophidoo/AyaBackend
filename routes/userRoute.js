import express  from "express";
import { deleteUserController, getUserController, userLoginController, userRegisterController, userUpdateController } from "../controller/userController.js";

const userRoute = express.Router();


// Register User
userRoute.post("/register", userRegisterController)

// Login user
userRoute.post("/login", userLoginController)

// get all user by id
userRoute.get("/:id", getUserController)

// delete user
userRoute.delete("/:id", deleteUserController)

// update user
userRoute.put("/:id", userUpdateController)

export default userRoute;