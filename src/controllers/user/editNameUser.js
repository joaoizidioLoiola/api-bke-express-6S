import userModel from "../../models/userModel.js";

const editNameUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ message: 'ID do usuario e novo nome são necessários' });
  }
  const updatedUser = await userModel.editNameUser(id, name);
  if (!updatedUser) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json({ message: 'Nome do usuario atualizado com sucesso' });
}

export default editNameUser