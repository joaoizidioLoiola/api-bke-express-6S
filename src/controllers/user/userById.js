import userModel from "../../models/userModel.js";

const userById = (req, res) => {
  const { idUser } = req.params;
  const user = userModel.getUserById(idUser)
  if (!user) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
  res.json(user);
}

export default userById