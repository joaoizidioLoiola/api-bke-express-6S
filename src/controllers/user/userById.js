import userModel from "../../models/userModel.js";

const userById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.getUserById(id)
  if (!user) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
  res.json(user);
}

export default userById