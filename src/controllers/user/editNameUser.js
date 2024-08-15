import userModel from "../../models/userModel.js";

const editNameUser = async (req, res) => {
  const { idUser } = req.params;
  const { nameUser } = req.body;

  if (!idUser || !nameUser) {
    return res.status(400).json({ message: 'ID do usuario e novo nome são necessários' });
  }
  const updatedUser = await userModel.editNameUser(idUser, nameUser);
  if (!updatedUser) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json({ message: 'Nome do usuario atualizado com sucesso' });
}

export default editNameUser