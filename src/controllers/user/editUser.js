import userModel from "../../models/userModel.js";

const editUser = (req, res) => {
  const { idUser } = req.params;
  const { userName, emailUser } = req.body;

  if (!idUser || !userName || !emailUser) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  const updateUser = userModel.editUser(idUser, { userName, emailUser });
  if (!updateUser) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }

  return res.json({ message: 'Usuario atualizado com sucesso', updateUser });
}

export default editUser