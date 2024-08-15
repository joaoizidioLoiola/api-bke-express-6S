import express from "express";
import userList from "../controllers/user/userList.js";
import userById from "../controllers/user/userById.js";
import deleteUser from "../controllers/user/deleteUser.js";
import editUser from "../controllers/user/editUser.js";
import createUser from "../controllers/user/createUser.js";
import editNameUser from "../controllers/user/editNameUser.js";
const router = express.Router();

router.get('/list', userList);
router.get('/:idUser', userById);
router.post('/', createUser)
router.put('/:idUser', editUser)
router.patch('/:idUser', editNameUser)
router.delete('/:idUser', deleteUser)

export default router