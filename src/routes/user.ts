import express from 'express'
import { userController } from '../Controllers/Users-Controllers'
import { user_middleware } from '../Middlewares/user-middleware'
import upload from '../utils/imageUploader'
const user_router = express.Router()


// user_router.use(user_middleware?.validateUser)
user_router.get('/login', [user_middleware?.validateUser], userController?.login)
user_router.post('/register/', userController?.register)
user_router.patch('/update', userController?.updateUser)
user_router.delete('deleteuser', userController?.deleteUser)
user_router.patch("/updateprofilephoto", userController?.updateProfileImage)
//  upload.single("imgUploader"), 

export default user_router